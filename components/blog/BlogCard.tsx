import Link from 'next/link'
import { BlogPostPreview, getCategoryInfo } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostPreview
}

export default function BlogCard({ post }: BlogCardProps) {
  const category = getCategoryInfo(post.category)
  
  // Category color mapping
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  }

  const categoryColor = category ? colorClasses[category.color] : colorClasses.blue

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-800 transition-all duration-200 hover:-translate-y-1">
        {/* Category & Read Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColor}`}>
            {category?.label || post.category}
          </span>
          <span className="text-xs text-slate-500">
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <time className="text-xs text-slate-500" dateTime={post.date}>
            {formattedDate}
          </time>
          <span className="text-sm text-cyan-400 font-medium group-hover:translate-x-1 transition-transform">
            Read more →
          </span>
        </div>
      </article>
    </Link>
  )
}