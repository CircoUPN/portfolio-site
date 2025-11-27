import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getCategoryInfo, CATEGORIES } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import BlogCTA from '@/components/blog/BlogCTA'

export const metadata: Metadata = {
  title: 'Blog | Divack Vega',
  description: 'Insights on revenue operations, automation, and building scalable business systems.',
  keywords: ['revenue operations', 'automation', 'revops', 'marketing operations', 'growth strategy'],
  openGraph: {
    title: 'Blog | Divack Vega',
    description: 'Insights on revenue operations, automation, and building scalable business systems.',
    type: 'website',
  },
}

// Category emoji mapping
const categoryEmojis: Record<string, string> = {
  'automation': '⚙️',
  'revenue-operations': '📊',
  'ai-tools': '🤖',
  'strategy': '🎯',
  'case-studies': '📈',
  'tutorials': '📚',
  'industry-insights': '💡',
}

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const category = params.category || null
  const posts = await getAllPosts()

  // Filter posts by category if selected
  const filteredPosts = category
    ? posts.filter(post => post.category === category)
    : posts

  // Get category info for display
  const categoryInfo = category ? getCategoryInfo(category) : null

  // Calculate post counts per category
  const postCounts: Record<string, number> = {}
  CATEGORIES.forEach(cat => {
    postCounts[cat.slug] = posts.filter(p => p.category === cat.slug).length
  })

  // Separate featured post (first/latest) from the rest
  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Blog
            </h1>
            <p className="text-xl text-slate-400">
              Insights on revenue operations, automation, and building scalable business systems that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <CategoryFilter 
            activeCategory={category} 
            postCounts={postCounts}
          />
        </div>
      </section>

      {/* Featured Post (Hero) */}
      {featuredPost && (
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-colors">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left - Visual/Emoji */}
                  <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                    <span className="text-8xl md:text-9xl opacity-50">
                      {categoryEmojis[featuredPost.category] || '📝'}
                    </span>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  
                  {/* Right - Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-${getCategoryInfo(featuredPost.category)?.color || 'slate'}-500/20 text-${getCategoryInfo(featuredPost.category)?.color || 'slate'}-400`}>
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
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                      Read article
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining Posts Grid */}
      {remainingPosts.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-8">
              <p className="text-slate-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                {categoryInfo ? ` in ${categoryInfo.label}` : ''}
              </p>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold text-slate-50 mb-2">
              No articles yet
            </h2>
            <p className="text-slate-400 mb-6">
              {categoryInfo 
                ? `No articles in ${categoryInfo.label} yet. Check back soon!`
                : 'No articles published yet. Check back soon!'
              }
            </p>
            {category && (
              <Link 
                href="/blog"
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                ← View all articles
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <BlogCTA />
        </div>
      </section>
    </main>
  )
}