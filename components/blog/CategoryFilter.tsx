import Link from 'next/link'
import { CATEGORIES } from '@/lib/blog'

interface CategoryFilterProps {
  activeCategory: string | null
  postCounts: Record<string, number>
}

export default function CategoryFilter({ activeCategory, postCounts }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* All Posts */}
      <Link
        href="/blog"
        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          !activeCategory
            ? 'bg-cyan-500 text-slate-900'
            : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
        }`}
      >
        All Posts
      </Link>

      {/* Category Links */}
      {CATEGORIES.map((category) => {
        const count = postCounts[category.slug] || 0
        const isActive = activeCategory === category.slug

        return (
          <Link
            key={category.slug}
            href={`/blog?category=${category.slug}`}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              isActive
                ? 'bg-cyan-500 text-slate-900'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
            }`}
          >
            {category.label}
            {count > 0 && (
              <span className={`ml-1.5 ${isActive ? 'text-slate-700' : 'text-slate-500'}`}>
                ({count})
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}