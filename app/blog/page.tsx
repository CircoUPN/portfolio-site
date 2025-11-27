import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import { getAllPosts, getCategoryInfo, CATEGORIES } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Divack Vega',
  description: 'Insights on revenue operations, automation, and building scalable business systems. Practical guides from real implementations.',
  keywords: ['revenue operations', 'automation', 'revops', 'marketing operations', 'business systems'],
  openGraph: {
    title: 'Blog | Divack Vega',
    description: 'Insights on revenue operations, automation, and building scalable business systems.',
    type: 'website',
  },
}

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams
  
  // Get all posts
  const allPosts = await getAllPosts()
  
  // Filter by category if specified
  const filteredPosts = category 
    ? allPosts.filter(post => post.category === category)
    : allPosts

  // Get category info for display
  const categoryInfo = category ? getCategoryInfo(category) : null

  // Calculate post counts per category
  const postCounts: Record<string, number> = {}
  CATEGORIES.forEach(cat => {
    postCounts[cat.slug] = allPosts.filter(post => post.category === cat.slug).length
  })

  // Separate featured post (latest) from the rest
  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      {/* Page Header */}
      <Section className="pt-24 pb-8">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              {categoryInfo ? categoryInfo.label : 'Blog'}
            </h1>
            <p className="text-lg text-slate-400">
              {categoryInfo 
                ? categoryInfo.description 
                : 'Insights on revenue operations, automation, and building scalable business systems. Practical guides from real implementations.'}
            </p>
          </div>
        </Container>
      </Section>

      {/* Category Filter */}
      <Section className="py-0">
        <Container>
          <CategoryFilter 
            activeCategory={category || null} 
            postCounts={postCounts}
          />
        </Container>
      </Section>

      {/* Featured Post */}
      {featuredPost && (
        <Section className="pt-8 pb-4">
          <Container>
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <article className="grid lg:grid-cols-2 gap-8 p-6 md:p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all">
                {/* Featured Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">
                      {featuredPost.category === 'automation' && '⚙️'}
                      {featuredPost.category === 'revenue-operations' && '📊'}
                      {featuredPost.category === 'ai-tools' && '🤖'}
                      {featuredPost.category === 'strategy' && '🎯'}
                      {featuredPost.category === 'case-studies' && '📈'}
                      {featuredPost.category === 'tutorials' && '📚'}
                      {featuredPost.category === 'industry-insights' && '💡'}
                    </div>
                    <span className="text-slate-500 text-sm">Featured Article</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${getCategoryInfo(featuredPost.category)?.color || 'slate'}-500/20 text-${getCategoryInfo(featuredPost.category)?.color || 'slate'}-400`}>
                      {getCategoryInfo(featuredPost.category)?.label || featuredPost.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 group-hover:text-cyan-400 transition-colors">
                    {featuredPost.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {featuredPost.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <time dateTime={featuredPost.date}>
                      {formatDate(featuredPost.date)}
                    </time>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  {/* Read More */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                      Read article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </Container>
        </Section>
      )}

      {/* Remaining Posts Grid */}
      <Section className="py-8">
        <Container>
          {remainingPosts.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-slate-500">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  {category && ` in ${categoryInfo?.label || category}`}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 mb-4">
                No posts found{category && ` in ${categoryInfo?.label || category}`}.
              </p>
              <Link 
                href="/blog"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View all posts
              </Link>
            </div>
          ) : (
            /* Only featured post exists, no remaining */
            <p className="text-sm text-slate-500 text-center py-8">
              More articles coming soon.
            </p>
          )}
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section className="py-16" background="alternate">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
              Ready to Fix Your Systems?
            </h2>
            <p className="text-slate-400 mb-8">
              Take the 3-minute assessment to discover your biggest operational bottleneck.
            </p>
            <Button href="/evaluation" variant="primary" size="large">
              Get Your 90-Day Action Plan
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}