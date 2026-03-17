'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';

type FilterType = 'all' | 'revenue' | 'efficiency';

interface CaseStudy {
  title: string;
  slug: string;
  description: string;
  metric: string;
  category: 'revenue' | 'efficiency';
  label: 'Firefighting' | 'Growth';
  date: string;
  duration: string;
  role: string;
  readTime: string;
  featured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Watch Tower: Revenue Operations Monitoring',
    slug: 'watch-tower',
    description: 'AI/ML technology company. Built comprehensive monitoring system that reduced automation failures by 85% and prevented $50K+ in annual revenue loss.',
    metric: '85% fewer failures',
    category: 'efficiency',
    label: 'Firefighting',
    date: 'Q2 2024',
    duration: '6 weeks',
    role: 'Solo implementation',
    readTime: '15 min read',
    featured: true,
  },
  {
    title: 'AI-Powered SMS Leasing Agent',
    slug: 'sms-agent',
    description: 'Property operations with 3 properties. Replaced $24K/year VA costs with AI automation, recovering 30-40% of previously lost leads.',
    metric: '$24K cost eliminated',
    category: 'efficiency',
    label: 'Firefighting',
    date: 'Q3 2024',
    duration: '4 weeks',
    role: 'Solo own business',
    readTime: '12 min read',
    featured: true,
  },
  {
    title: 'Closed-Loop Attribution System',
    slug: 'attribution-system',
    description: 'Mid-market SaaS ($15M-$50M ARR). Nearly doubled MQL→SQL conversion from 25% to 48% and attributed $2.1M in revenue.',
    metric: '48% conversion rate',
    category: 'revenue',
    label: 'Growth',
    date: '2023-2024',
    duration: '8-10 weeks',
    role: 'Lead architect',
    readTime: '18 min read',
    featured: true,
  },
  {
    title: 'LinkedIn Outbound Engine',
    slug: 'linkedin-outbound',
    description: 'B2B services firm. Built centralized outbound system with SLA monitoring that improved response times by 87% and increased pipeline by 78%.',
    metric: '87% faster response',
    category: 'revenue',
    label: 'Growth',
    date: 'Q3 2024',
    duration: '5 weeks',
    role: 'Solo implementation',
    readTime: '14 min read',
  },
  {
    title: 'Sales Forecasting Rebuild',
    slug: 'sales-forecasting',
    description: 'B2B SaaS ($8M ARR). Transformed forecasting accuracy from ±32% to ±9% variance, enabling successful Series B raise.',
    metric: '±9% forecast accuracy',
    category: 'revenue',
    label: 'Growth',
    date: 'Q1 2024',
    duration: '6 weeks',
    role: 'Lead architect',
    readTime: '15 min read',
  },
  {
    title: 'Full-Funnel Ads System',
    slug: 'full-funnel-ads',
    description: 'Real estate investment group. Built integrated acquisition system that achieved 4.8x ROAS and $3.8M/month in investment commitments.',
    metric: '4.8x ROAS',
    category: 'revenue',
    label: 'Growth',
    date: 'Q2-Q3 2024',
    duration: '8 weeks',
    role: 'Solo implementation',
    readTime: '14 min read',
  },
  {
    title: 'KPI Command Center',
    slug: 'kpi-command-center',
    description: 'Multi-division investment group. Built unified BI platform that reduced reporting time by 91% and enabled real-time decision making.',
    metric: '91% time saved',
    category: 'efficiency',
    label: 'Firefighting',
    date: 'Q2 2024',
    duration: '7 weeks',
    role: 'Solo implementation',
    readTime: '14 min read',
  },
  {
    title: 'Database Validation & Audit',
    slug: 'database-validation',
    description: 'B2B SaaS ($12M ARR). Built data quality infrastructure that reduced duplicates by 91% and restored trust in CRM data.',
    metric: '91% duplicate reduction',
    category: 'efficiency',
    label: 'Firefighting',
    date: 'Q1 2024',
    duration: '5 weeks',
    role: 'Solo implementation',
    readTime: '13 min read',
  },
  {
    title: 'Lead Lifecycle Autopilot',
    slug: 'lead-lifecycle',
    description: 'Scaling SaaS (75→150 employees). Built standardized lifecycle and SOPs that reduced new hire ramp time by 58%.',
    metric: '58% faster onboarding',
    category: 'efficiency',
    label: 'Growth',
    date: 'Q4 2023',
    duration: '6 weeks',
    role: 'Lead architect',
    readTime: '13 min read',
  },
  {
    title: 'GTM Stack Integration',
    slug: 'gtm-integration',
    description: 'Mid-market SaaS ($25M ARR). Unified 5 siloed systems into single source of truth, eliminating 32 hours/week of data reconciliation.',
    metric: '99% data consistency',
    category: 'efficiency',
    label: 'Firefighting',
    date: 'Q3 2024',
    duration: '8 weeks',
    role: 'Solo implementation',
    readTime: '15 min read',
  },
];

const COUNTS = {
  all: caseStudies.length,
  revenue: caseStudies.filter((s) => s.category === 'revenue').length,
  efficiency: caseStudies.filter((s) => s.category === 'efficiency').length,
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredStudies = caseStudies.filter((s) =>
    activeFilter === 'all' ? true : s.category === activeFilter
  );

  return (
    <>
      {/* ── Header + Stats ───────────────────────────────────────────── */}
      <Section className="pt-32 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mb-12">
            Real case studies with documented results from 10+ implementations
            across mid-market SaaS, B2B services, and property operations.
          </p>

          {/* Open stat row */}
          <div className="flex flex-wrap gap-x-10 gap-y-6 border-t border-zinc-800 pt-8">
            {[
              { value: '$2.1M+', label: 'Revenue Attributed' },
              { value: '$98K+',  label: 'Annual Costs Eliminated' },
              { value: '85%',   label: 'Average Improvement' },
              { value: '10+',   label: 'Implementations' },
            ].map(({ value, label }, i, arr) => (
              <div key={label} className="flex items-center gap-10">
                <div>
                  {/* Numbers — amber accent */}
                  <p className="text-2xl md:text-3xl font-bold text-amber-300">{value}</p>
                  <p className="text-sm text-zinc-600 mt-0.5">{label}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-zinc-800" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Filters + Grid ───────────────────────────────────────────── */}
      <Section background="alternate" className="py-12 border-t border-zinc-800/60">
        <Container>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-10">
            {([
              { id: 'all',        label: 'All Case Studies' },
              { id: 'revenue',    label: 'Revenue Engine Building' },
              { id: 'efficiency', label: 'Operational Efficiency' },
            ] as { id: FilterType; label: string }[]).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeFilter === id
                    ? 'bg-white text-zinc-950 shadow-sm'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
                }`}
              >
                {label}
                <span className={`ml-2 text-xs rounded-full px-1.5 py-0.5 ${
                  activeFilter === id
                    ? 'bg-zinc-950/20 text-zinc-800'
                    : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {COUNTS[id]}
                </span>
              </button>
            ))}
          </div>

          {/* Case study grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <Card
                key={study.slug}
                featured={study.featured}
                title={study.title}
                description={study.description}
                badge={study.label === 'Firefighting' ? 'Firefighting Mode' : 'Growth Mode'}
                href={`/portfolio/${study.slug}`}
              >
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="px-2 py-1 bg-zinc-950/60 rounded">{study.date}</span>
                  <span className="px-2 py-1 bg-zinc-950/60 rounded">{study.duration}</span>
                  <span className="px-2 py-1 bg-zinc-950/60 rounded">{study.readTime}</span>
                </div>
                <p className="mt-2 text-zinc-600 text-xs">Role: {study.role}</p>
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  {/* Metric — amber accent */}
                  <p className="text-amber-300 font-bold text-lg">{study.metric}</p>
                </div>
              </Card>
            ))}
          </div>

        </Container>
      </Section>

      {/* ── How Every Engagement Works ────────────────────────────────── */}
      <Section className="py-16 border-t border-zinc-800/60">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
              How Every Engagement Works
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  num: '01',
                  title: 'Strategy',
                  body: 'Map current state, identify bottlenecks, define success metrics and ROI targets before touching any tooling.',
                },
                {
                  num: '02',
                  title: 'Implementation',
                  body: 'Write code, architect databases, integrate APIs. Ship working infrastructure in weeks, not months.',
                },
                {
                  num: '03',
                  title: 'Results',
                  body: 'Track KPIs, optimize performance, document learnings. Every outcome is measured with real numbers.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="border-l-2 border-zinc-800 pl-6">
                  <p className="text-4xl font-bold text-zinc-800 mb-3 leading-none">{num}</p>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <Section background="alternate" className="py-16 border-t border-zinc-800/60">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Similar Results?
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Take the 3-minute assessment to find your biggest infrastructure
              bottleneck and get a personalized 90-day action plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/evaluation" variant="primary" size="large">
                Get Your 90-Day Action Plan
              </Button>
              <a href="/contact" className="text-zinc-600 hover:text-zinc-300 transition-colors text-sm">
                Or schedule a direct call →
              </a>
            </div>
            <p className="text-zinc-800 text-xs mt-6 tracking-wide uppercase">
              Free · 3 minutes · Instant results
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}