import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

// Import client-safe exports and re-export them
export { CATEGORIES, getCategoryInfo } from './categories'
export type { Category } from './categories'

// =============================================================================
// TYPES
// =============================================================================

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  tags?: string[]
  keywords?: string[]
  content: string
  relatedCaseStudy?: 'watch-tower' | 'sms-agent' | 'attribution-system'
}

export interface Heading {
  id: string
  text: string
  level: number
}

// =============================================================================
// CONTENT DIRECTORY
// =============================================================================

const postsDirectory = path.join(process.cwd(), 'content/blog')

// =============================================================================
// POST RETRIEVAL FUNCTIONS
// =============================================================================

/**
 * Get all blog post slugs for static generation
 * Supports both .md and .mdx files
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx?$/, ''))
  } catch {
    return []
  }
}

/**
 * Get the full path to a post file (checks both .md and .mdx)
 */
function getPostFilePath(slug: string): string | null {
  const mdPath = path.join(postsDirectory, `${slug}.md`)
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  
  if (fs.existsSync(mdxPath)) return mdxPath
  if (fs.existsSync(mdPath)) return mdPath
  return null
}

/**
 * Get all posts, sorted by date (newest first)
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)))
  
  // Filter out null posts and sort by date
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = getPostFilePath(slug)
    if (!fullPath) return null
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Parse frontmatter
    const { data, content } = matter(fileContents)
    
    // Skip unpublished posts (if published field exists and is false)
    if (data.published === false) return null
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content)
    
    const contentHtml = processedContent.toString()
    
    // Calculate read time
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const readTime = `${Math.ceil(wordCount / wordsPerMinute)} min read`
    
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      readTime,
      category: data.category,
      tags: data.tags || [],
      keywords: data.keywords || [],
      content: contentHtml,
      relatedCaseStudy: data.relatedCaseStudy
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
}

/**
 * Get related posts by category (excluding current post)
 */
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)
}

// =============================================================================
// CONTENT PROCESSING UTILITIES
// =============================================================================

/**
 * Extract headings from HTML content for Table of Contents
 */
export function extractHeadings(htmlContent: string): Heading[] {
  const headings: Heading[] = []
  const regex = /<h([23])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h[23]>/gi
  
  let match
  while ((match = regex.exec(htmlContent)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3]
    })
  }
  
  return headings
}

/**
 * Add IDs to headings in HTML content for anchor links
 */
export function addHeadingIds(htmlContent: string): string {
  let counter = 0
  
  return htmlContent.replace(
    /<h([23])([^>]*)>([^<]*)<\/h[23]>/gi,
    (match, level, attrs, text) => {
      // Create slug from heading text
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      
      counter++
      const uniqueId = `${id}-${counter}`
      
      return `<h${level}${attrs} id="${uniqueId}">${text}</h${level}>`
    }
  )
}

// =============================================================================
// RSS FEED GENERATION
// =============================================================================

/**
 * Generate RSS feed XML
 */
export async function generateRSSFeed(): Promise<string> {
  const posts = await getAllPosts()
  const siteUrl = 'https://divackvega.com'
  
  const items = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <category>${post.category}</category>
    </item>
  `).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Divack Vega Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Insights on revenue operations, automation, and building scalable business systems.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`
}