'use client'

import { useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Don't render if less than 3 headings
  if (headings.length < 3) return null

  return (
    <nav className="my-8 p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
      {/* Header - Clickable on mobile */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full md:cursor-default"
      >
        <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
          Table of Contents
        </h2>
        {/* Mobile toggle icon */}
        <svg
          className={`w-5 h-5 text-slate-400 md:hidden transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Links - Always visible on desktop, toggleable on mobile */}
      <ul className={`mt-4 space-y-2 ${isExpanded ? 'block' : 'hidden'} md:block`}>
        {headings.map((heading, index) => (
          <li
            key={`${heading.id}-${index}`}
            style={{ paddingLeft: heading.level === 3 ? '1rem' : '0' }}
          >
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors hover:text-cyan-400 ${
                heading.level === 2
                  ? 'text-slate-300 font-medium'
                  : 'text-slate-400'
              }`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(heading.id)
                if (element) {
                  // Offset for fixed header
                  const offset = 100
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}