'use client'

import Link from 'next/link'
import { CATEGORIES } from '@/lib/categories'

interface CategoryFilterProps {
  activeCategory: string | null
  postCounts: Record<string, number>
}

export default function CategoryFilter({ activeCategory, postCounts }: CategoryFilterProps) {
  // Calculate total posts
  const totalPosts = Object.values(postCounts).reduce((a, b) => a + b, 0)

  return (
    <div className="flex flex-wrap gap-2">
      {/* All Posts Button */}
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !activeCategory
            ? 'bg-cyan-500 text-slate-950'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100'
        }`}
      >
        All
        <span className={`ml-2 ${!activeCategory ? 'text-slate-950/70' : 'text-slate-500'}`}>
          {totalPosts}
        </span>
      </Link>

      {/* Category Buttons */}
      {CATEGORIES.map(category => {
        const count = postCounts[category.slug] || 0
        const isActive = activeCategory === category.slug

        // Only show categories with posts
        if (count === 0) return null

        return (
          <Link
            key={category.slug}
            href={`/blog?category=${category.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? 'bg-cyan-500 text-slate-950'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100'
            }`}
          >
            {category.label}
            <span className={`ml-2 ${isActive ? 'text-slate-950/70' : 'text-slate-500'}`}>
              {count}
            </span>
          </Link>
        )
      })}
    </div>
  )
}