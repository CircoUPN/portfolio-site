'use client'

import Link from 'next/link'
import { CATEGORIES } from '@/lib/categories'

interface CategoryFilterProps {
  activeCategory: string | null
  postCounts: Record<string, number>
}

export default function CategoryFilter({ activeCategory, postCounts }: CategoryFilterProps) {
  const totalPosts = Object.values(postCounts).reduce((a, b) => a + b, 0)

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
          !activeCategory
            ? 'bg-white text-zinc-950 shadow-sm'
            : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
        }`}
      >
        All
        <span className={`ml-2 text-xs rounded-full px-1.5 py-0.5 ${
          !activeCategory ? 'bg-zinc-950/20 text-zinc-800' : 'bg-zinc-800 text-zinc-500'
        }`}>
          {totalPosts}
        </span>
      </Link>

      {CATEGORIES.map(category => {
        const count = postCounts[category.slug] || 0
        const isActive = activeCategory === category.slug
        if (count === 0) return null

        return (
          <Link
            key={category.slug}
            href={`/blog?category=${category.slug}`}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
              isActive
                ? 'bg-white text-zinc-950 shadow-sm'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
            }`}
          >
            {category.label}
            <span className={`ml-2 text-xs rounded-full px-1.5 py-0.5 ${
              isActive ? 'bg-zinc-950/20 text-zinc-800' : 'bg-zinc-800 text-zinc-500'
            }`}>
              {count}
            </span>
          </Link>
        )
      })}
    </div>
  )
}