// =============================================================================
// CATEGORIES - Client-safe exports (no fs/path dependencies)
// =============================================================================

export interface Category {
  slug: string
  label: string
  color: string
  description: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'automation',
    label: 'Automation',
    color: 'cyan',
    description: 'Building reliable automation systems that scale'
  },
  {
    slug: 'revenue-operations',
    label: 'Revenue Operations',
    color: 'blue',
    description: 'Optimizing the revenue engine from lead to close'
  },
  {
    slug: 'ai-tools',
    label: 'AI Tools',
    color: 'violet',
    description: 'Leveraging AI for operational efficiency'
  },
  {
    slug: 'strategy',
    label: 'Strategy',
    color: 'amber',
    description: 'Strategic frameworks for growth operations'
  },
  {
    slug: 'case-studies',
    label: 'Case Studies',
    color: 'emerald',
    description: 'Deep dives into real implementations'
  },
  {
    slug: 'tutorials',
    label: 'Tutorials',
    color: 'rose',
    description: 'Step-by-step guides and how-tos'
  },
  {
    slug: 'industry-insights',
    label: 'Industry Insights',
    color: 'slate',
    description: 'Trends and analysis in RevOps and MarTech'
  }
]

// Get category info by slug
export function getCategoryInfo(slug: string): Category | undefined {
  return CATEGORIES.find(cat => cat.slug === slug)
}