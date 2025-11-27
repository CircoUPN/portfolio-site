import Link from 'next/link'

type CaseStudySlug = 
  | 'watch-tower' 
  | 'sms-agent' 
  | 'attribution-system'
  | 'linkedin-outbound'
  | 'sales-forecasting'
  | 'full-funnel-ads'
  | 'kpi-command-center'
  | 'database-validation'
  | 'lead-lifecycle'
  | 'gtm-integration'

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
  'linkedin-outbound': {
    title: 'LinkedIn Outbound Engine',
    metric: '87%',
    metricLabel: 'faster response time',
    description: 'How I built a centralized outbound system with SLA monitoring that transformed SDR productivity and pipeline generation.',
    href: '/portfolio/linkedin-outbound',
  },
  'sales-forecasting': {
    title: 'Sales Forecasting Rebuild',
    metric: '±9%',
    metricLabel: 'forecast accuracy',
    description: 'How I transformed forecasting from ±32% variance to ±9%, enabling a successful Series B raise.',
    href: '/portfolio/sales-forecasting',
  },
  'full-funnel-ads': {
    title: 'Full-Funnel Ads System',
    metric: '4.8x',
    metricLabel: 'ROAS achieved',
    description: 'How I built an integrated acquisition system that drove $3.8M/month in investment commitments.',
    href: '/portfolio/full-funnel-ads',
  },
  'kpi-command-center': {
    title: 'KPI Command Center',
    metric: '91%',
    metricLabel: 'reporting time saved',
    description: 'How I built a unified BI platform that eliminated 20+ hours/week of manual reporting.',
    href: '/portfolio/kpi-command-center',
  },
  'database-validation': {
    title: 'Database Validation & Audit',
    metric: '91%',
    metricLabel: 'duplicate reduction',
    description: 'How I built data quality infrastructure that restored trust in CRM data and eliminated embarrassing outreach mistakes.',
    href: '/portfolio/database-validation',
  },
  'lead-lifecycle': {
    title: 'Lead Lifecycle Autopilot',
    metric: '58%',
    metricLabel: 'faster onboarding',
    description: 'How I standardized the lead lifecycle and SOPs to dramatically reduce new hire ramp time.',
    href: '/portfolio/lead-lifecycle',
  },
  'gtm-integration': {
    title: 'GTM Stack Integration',
    metric: '99%',
    metricLabel: 'data consistency',
    description: 'How I unified 5 siloed systems into a single source of truth, ending the weekly data wars.',
    href: '/portfolio/gtm-integration',
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