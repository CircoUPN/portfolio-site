import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import TableOfContents from '@/components/blog/TableOfContents'
import CaseStudyCallout from '@/components/blog/CaseStudyCallout'
import BlogCTA from '@/components/blog/BlogCTA'
import BlogCard from '@/components/blog/BlogCard'
import ShareButtons from '@/components/blog/ShareButtons'
import { 
  getPostBySlug, 
  getAllPostSlugs, 
  getRelatedPosts,
  extractHeadings,
  addHeadingIds,
  getCategoryInfo 
} from '@/lib/blog'

// Generate static paths for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Divack Vega`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Divack Vega'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get category info
  const categoryInfo = getCategoryInfo(post.category)

  // IMPORTANT: Add IDs to headings FIRST, then extract them
  const contentWithIds = addHeadingIds(post.content)
  const headings = extractHeadings(contentWithIds)

  // Get related posts
  const relatedPosts = await getRelatedPosts(slug, post.category, 3)

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Split content for case study callout insertion
  const paragraphs = contentWithIds.split('</p>')
  const insertPoint = Math.floor(paragraphs.length * 0.4)
  const contentBefore = paragraphs.slice(0, insertPoint).join('</p>') + '</p>'
  const contentAfter = paragraphs.slice(insertPoint).join('</p>')

  // Color classes for category badge
  const colorClasses: Record<string, string> = {
    cyan: 'bg-cyan-500/20 text-cyan-400',
    blue: 'bg-blue-500/20 text-blue-400',
    violet: 'bg-violet-500/20 text-violet-400',
    amber: 'bg-amber-500/20 text-amber-400',
    emerald: 'bg-emerald-500/20 text-emerald-400',
    rose: 'bg-rose-500/20 text-rose-400',
    slate: 'bg-slate-500/20 text-slate-400',
  }
  const badgeColor = colorClasses[categoryInfo?.color || 'slate']

  return (
    <article className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/blog" className="hover:text-slate-300 transition-colors">
                Blog
              </Link>
              <span>/</span>
              <Link 
                href={`/blog?category=${post.category}`}
                className="hover:text-slate-300 transition-colors"
              >
                {categoryInfo?.label || post.category}
              </Link>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${badgeColor}`}>
                {categoryInfo?.label || post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
              <time dateTime={post.date}>{formattedDate}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.tags && post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">Share:</span>
              <ShareButtons title={post.title} slug={slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Content Section */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,320px] gap-12">
            
            {/* Main Content Column */}
            <div className="min-w-0">
              {/* Article Content - First Part */}
              <div 
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-slate-50 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-slate-300 prose-p:mb-6
                  prose-a:text-cyan-400 hover:prose-a:text-cyan-300
                  prose-strong:text-slate-100
                  prose-code:text-cyan-400 prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700
                  prose-ul:text-slate-300 prose-ol:text-slate-300
                  prose-li:mb-2
                  prose-blockquote:border-l-cyan-500 prose-blockquote:text-slate-400"
                dangerouslySetInnerHTML={{ __html: contentBefore }}
              />

              {/* Case Study Callout - Mid-article */}
              {post.relatedCaseStudy && (
                <div className="my-10">
                  <CaseStudyCallout caseStudy={post.relatedCaseStudy as 'watch-tower' | 'sms-agent' | 'attribution-system'} />
                </div>
              )}

              {/* Article Content - Second Part */}
              <div 
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-slate-50 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-slate-300 prose-p:mb-6
                  prose-a:text-cyan-400 hover:prose-a:text-cyan-300
                  prose-strong:text-slate-100
                  prose-code:text-cyan-400 prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700
                  prose-ul:text-slate-300 prose-ol:text-slate-300
                  prose-li:mb-2
                  prose-blockquote:border-l-cyan-500 prose-blockquote:text-slate-400"
                dangerouslySetInnerHTML={{ __html: contentAfter }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-800">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-sm bg-slate-800 text-slate-400 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile CTA - Shows on mobile where sidebar is hidden */}
              <div className="lg:hidden mt-12">
                <BlogCTA />
              </div>
            </div>

            {/* Sticky Sidebar - Desktop Only */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <TableOfContents headings={headings} />
                )}

                {/* Evaluation CTA */}
                <BlogCTA variant="compact" />

                {/* Related Posts in Sidebar */}
                {relatedPosts.length > 0 && (
                  <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                      Related Reading
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.slice(0, 2).map((relatedPost) => (
                        <Link 
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">
                            {relatedPost.readTime}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts - Full Section */}
      {relatedPosts.length > 0 && (
        <section className="px-6 py-16 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-50 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </section>
    </article>
  )
}