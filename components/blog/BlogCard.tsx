import Link from 'next/link'
import { getCategoryInfo } from '@/lib/categories'

interface BlogCardProps {
  post: {
    slug: string
    title: string
    description: string
    date: string
    readTime: string
    category: string
    tags?: string[]
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  const categoryInfo = getCategoryInfo(post.category)
  
  // Color mapping for category badges
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
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-800/70 transition-all">
        {/* Category Badge */}
        <div className="mb-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${badgeColor}`}>
            {categoryInfo?.label || post.category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {post.description}
        </p>
        
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>{new Date(post.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </article>
    </Link>
  )
}