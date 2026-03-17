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

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const category = params.category || null
  const posts = await getAllPosts()

  const filteredPosts = category
    ? posts.filter(post => post.category === category)
    : posts

  const categoryInfo = category ? getCategoryInfo(category) : null

  const postCounts: Record<string, number> = {}
  CATEGORIES.forEach(cat => {
    postCounts[cat.slug] = posts.filter(p => p.category === cat.slug).length
  })

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen bg-zinc-950">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <section className="pt-32 pb-10 px-6 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400/70 mb-4">
              Writing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-zinc-500">
              Insights on revenue operations, automation, and building scalable
              business systems that actually work.
            </p>
          </div>

          {/* Category filter */}
          <CategoryFilter activeCategory={category} postCounts={postCounts} />
        </div>
      </section>

      {/* ── Featured Post ────────────────────────────────────────────── */}
      {featuredPost && (
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-200">
                <div className="grid lg:grid-cols-2 gap-0">

                  {/* Left — typographic category art, no emoji */}
                  <div className="aspect-[16/10] lg:aspect-auto bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                    <span className="text-[6rem] md:text-[8rem] font-black text-zinc-800/60 select-none uppercase tracking-widest leading-none">
                      {getCategoryInfo(featuredPost.category)?.label?.split(' ')[0] ?? 'Blog'}
                    </span>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-400/10 text-amber-300/80 text-xs font-medium rounded-full border border-amber-400/15">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-400/5 text-amber-300/80 border border-amber-400/15">
                        {getCategoryInfo(featuredPost.category)?.label || featuredPost.category}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-zinc-500 mb-6 line-clamp-3 leading-relaxed">
                      {featuredPost.description}
                    </p>

                    <div className="flex items-center gap-3 text-sm text-zinc-600 mb-6">
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}</span>
                      <span>·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <div className="flex items-center text-zinc-400 text-sm font-medium group-hover:text-amber-300 transition-colors">
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

      {/* ── Remaining Posts ───────────────────────────────────────────── */}
      {remainingPosts.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-zinc-600 mb-6">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              {categoryInfo ? ` in ${categoryInfo.label}` : ''}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Empty State ───────────────────────────────────────────────── */}
      {filteredPosts.length === 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto text-center py-20">
            <svg className="w-10 h-10 text-zinc-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
            <h2 className="text-xl font-bold text-white mb-2">No articles yet</h2>
            <p className="text-zinc-500 mb-6">
              {categoryInfo
                ? `No articles in ${categoryInfo.label} yet. Check back soon.`
                : 'No articles published yet. Check back soon.'}
            </p>
            {category && (
              <Link href="/blog" className="text-amber-300 hover:text-amber-200 text-sm font-medium transition-colors">
                ← View all articles
              </Link>
            )}
          </div>
        </section>
      )}

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <BlogCTA />
        </div>
      </section>

    </main>
  )
}