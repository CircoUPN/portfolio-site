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

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5">
        {/* Category badge — amber accent */}
        <div className="mb-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-400/5 text-amber-300/80 border border-amber-400/15">
            {categoryInfo?.label || post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-500 text-sm mb-4 line-clamp-3 leading-relaxed">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-zinc-600">
          <span>{new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </article>
    </Link>
  )
}