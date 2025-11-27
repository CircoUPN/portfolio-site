import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { remark } from 'remark'
import html from 'remark-html'

// Directory where blog posts live
const postsDirectory = path.join(process.cwd(), 'content/blog')

// Valid categories
export const CATEGORIES = [
  { slug: 'rev-ops', label: 'RevOps', color: 'blue' },
  { slug: 'automation', label: 'Automation', color: 'violet' },
  { slug: 'efficiency', label: 'Efficiency', color: 'emerald' },
  { slug: 'ai', label: 'AI', color: 'cyan' },
  { slug: 'marketing', label: 'Marketing', color: 'amber' },
  { slug: 'branding', label: 'Branding', color: 'pink' },
  { slug: 'sales', label: 'Sales', color: 'orange' },
] as const

export type CategorySlug = typeof CATEGORIES[number]['slug']

// Blog post frontmatter structure
export interface PostFrontmatter {
  title: string
  description: string
  date: string
  category: CategorySlug
  tags: string[]
  keywords: string[]
  relatedCaseStudy?: 'watch-tower' | 'sms-agent' | 'attribution-system'
  image?: string
  published?: boolean
}

// Full blog post with content
export interface BlogPost extends PostFrontmatter {
  slug: string
  content: string
  readTime: string
  readTimeMinutes: number
}

// Blog post for listing (without full content)
export interface BlogPostPreview extends PostFrontmatter {
  slug: string
  readTime: string
  readTimeMinutes: number
  excerpt: string
}

/**
 * Get all blog post slugs (for static generation)
 */
export function getAllPostSlugs(): string[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.mdx') || name.endsWith('.md'))
    .map((name) => name.replace(/\.mdx?$/, ''))
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Try .mdx first, then .md
  let fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`)
  }
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Calculate reading time
  const stats = readingTime(content)
  
  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    content: contentHtml,
    readTime: stats.text,
    readTimeMinutes: Math.ceil(stats.minutes),
    ...(data as PostFrontmatter),
  }
}

/**
 * Get all blog posts (for listing page)
 */
export async function getAllPosts(): Promise<BlogPostPreview[]> {
  const slugs = getAllPostSlugs()
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug)
      if (!post) return null
      
      // Skip unpublished posts in production
      if (process.env.NODE_ENV === 'production' && post.published === false) {
        return null
      }
      
      // Create excerpt from content (first 160 chars, strip HTML)
      const excerpt = post.content
        .replace(/<[^>]*>/g, '') // Strip HTML tags
        .replace(/\s+/g, ' ')    // Normalize whitespace
        .trim()
        .slice(0, 160) + '...'
      
      // Return preview (without full content)
      const { content, ...preview } = post
      return { ...preview, excerpt }
    })
  )
  
  // Filter nulls and sort by date (newest first)
  return posts
    .filter((post): post is BlogPostPreview => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: CategorySlug): Promise<BlogPostPreview[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.category === category)
}

/**
 * Get related posts (same category, excluding current)
 */
export async function getRelatedPosts(currentSlug: string, category: CategorySlug, limit: number = 3): Promise<BlogPostPreview[]> {
  const categoryPosts = await getPostsByCategory(category)
  return categoryPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
}

/**
 * Extract headings from HTML content for Table of Contents
 */
export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /<h([2-3])[^>]*>([^<]+)<\/h[2-3]>/g
  const headings: { id: string; text: string; level: number }[] = []
  
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1])
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    headings.push({ id, text, level })
  }
  
  return headings
}

/**
 * Add IDs to headings in HTML content (for anchor links)
 */
export function addHeadingIds(content: string): string {
  return content.replace(
    /<h([2-3])([^>]*)>([^<]+)<\/h([2-3])>/g,
    (match, level, attrs, text, closeLevel) => {
      const id = text
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      return `<h${level}${attrs} id="${id}">${text}</h${closeLevel}>`
    }
  )
}

/**
 * Get category info by slug
 */
export function getCategoryInfo(slug: CategorySlug) {
  return CATEGORIES.find((cat) => cat.slug === slug)
}