import Link from 'next/link'

type CaseStudySlug = 'watch-tower' | 'sms-agent' | 'attribution-system'

interface CaseStudyCalloutProps {
  caseStudy: CaseStudySlug
}

// Case study metadata
const CASE_STUDIES: Record<CaseStudySlug, {
  title: string
  metric: string
  metricLabel: string
  description: string
  href: string
}> = {
  'watch-tower': {
    title: 'Watch Tower: Revenue Operations Monitoring',
    metric: '85%',
    metricLabel: 'fewer automation failures',
    description: 'How I built a monitoring system that reduced automation failures from 15% to under 2% for a company running 50+ daily workflows.',
    href: '/portfolio/watch-tower',
  },
  'sms-agent': {
    title: 'AI-Powered SMS Leasing Agent',
    metric: '$24K',
    metricLabel: 'annual cost eliminated',
    description: 'How I replaced a $2K/month VA with an AI agent that responds instantly, 24/7, and books tours automatically.',
    href: '/portfolio/sms-agent',
  },
  'attribution-system': {
    title: 'Closed-Loop Attribution System',
    metric: '48%',
    metricLabel: 'MQL→SQL conversion',
    description: 'How I built attribution infrastructure that nearly doubled conversion rates and attributed $2.1M in revenue.',
    href: '/portfolio/attribution-system',
  },
}

export default function CaseStudyCallout({ caseStudy }: CaseStudyCalloutProps) {
  const study = CASE_STUDIES[caseStudy]
  
  if (!study) return null

  return (
    <div className="my-8 p-6 bg-slate-800/50 border-l-4 border-cyan-500 rounded-r-xl">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Metric Badge */}
        <div className="flex-shrink-0">
          <div className="inline-flex flex-col items-center justify-center w-20 h-20 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
            <span className="text-2xl font-bold text-cyan-400">{study.metric}</span>
            <span className="text-xs text-slate-400 text-center leading-tight px-1">{study.metricLabel}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <p className="text-sm text-cyan-400 font-medium mb-1">Related Case Study</p>
          <h4 className="text-lg font-semibold text-slate-100 mb-2">{study.title}</h4>
          <p className="text-sm text-slate-400 mb-3">{study.description}</p>
          <Link 
            href={study.href}
            className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Read the full case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}