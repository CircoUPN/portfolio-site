'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';

type FilterType = 'all' | 'revenue' | 'efficiency';
type BadgeColor = 'blue' | 'violet' | 'green' | 'amber' | 'red';

interface CaseStudy {
  title: string;
  slug: string;
  description: string;
  metric: string;
  category: 'revenue' | 'efficiency';
  label: 'Firefighting' | 'Growth';
  badgeColor: BadgeColor;
  date: string;
  duration: string;
  role: string;
  readTime: string;
}

const caseStudies: CaseStudy[] = [
  // === HERO CASE STUDIES ===
  {
    title: 'Watch Tower: Revenue Operations Monitoring',
    slug: 'watch-tower',
    description: 'AI/ML technology company. Built comprehensive monitoring system that reduced automation failures by 85% and prevented $50K+ in annual revenue loss.',
    metric: '85% fewer failures',
    category: 'efficiency',
    label: 'Firefighting',
    badgeColor: 'amber',
    date: 'Q2 2024',
    duration: '6 weeks',
    role: 'Solo implementation',
    readTime: '15 min read'
  },
  {
    title: 'AI-Powered SMS Leasing Agent',
    slug: 'sms-agent',
    description: 'Property operations with 3 properties. Replaced $24K/year VA costs with AI automation, recovering 30-40% of previously lost leads.',
    metric: '$24K cost eliminated',
    category: 'efficiency',
    label: 'Firefighting',
    badgeColor: 'amber',
    date: 'Q3 2024',
    duration: '4 weeks',
    role: 'Solo own business',
    readTime: '12 min read'
  },
  {
    title: 'Closed-Loop Attribution System',
    slug: 'attribution-system',
    description: 'Mid-market SaaS ($15M-$50M ARR). Nearly doubled MQL→SQL conversion from 25% to 48% and attributed $2.1M in revenue.',
    metric: '48% conversion rate',
    category: 'revenue',
    label: 'Growth',
    badgeColor: 'blue',
    date: '2023-2024',
    duration: '8-10 weeks',
    role: 'Lead architect',
    readTime: '18 min read'
  },
  // === REVENUE ENGINE CASE STUDIES ===
  {
    title: 'LinkedIn Outbound Engine',
    slug: 'linkedin-outbound',
    description: 'B2B services firm. Built centralized outbound system with SLA monitoring that improved response times by 87% and increased pipeline by 78%.',
    metric: '87% faster response',
    category: 'revenue',
    label: 'Growth',
    badgeColor: 'blue',
    date: 'Q3 2024',
    duration: '5 weeks',
    role: 'Solo implementation',
    readTime: '14 min read'
  },
  {
    title: 'Sales Forecasting Rebuild',
    slug: 'sales-forecasting',
    description: 'B2B SaaS ($8M ARR). Transformed forecasting accuracy from ±32% to ±9% variance, enabling successful Series B raise.',
    metric: '±9% forecast accuracy',
    category: 'revenue',
    label: 'Growth',
    badgeColor: 'blue',
    date: 'Q1 2024',
    duration: '6 weeks',
    role: 'Lead architect',
    readTime: '15 min read'
  },
  {
    title: 'Full-Funnel Ads System',
    slug: 'full-funnel-ads',
    description: 'Real estate investment group. Built integrated acquisition system that achieved 4.8x ROAS and $3.8M/month in investment commitments.',
    metric: '4.8x ROAS',
    category: 'revenue',
    label: 'Growth',
    badgeColor: 'blue',
    date: 'Q2-Q3 2024',
    duration: '8 weeks',
    role: 'Solo implementation',
    readTime: '14 min read'
  },
  // === OPERATIONAL EFFICIENCY CASE STUDIES ===
  {
    title: 'KPI Command Center',
    slug: 'kpi-command-center',
    description: 'Multi-division investment group. Built unified BI platform that reduced reporting time by 91% and enabled real-time decision making.',
    metric: '91% time saved',
    category: 'efficiency',
    label: 'Firefighting',
    badgeColor: 'amber',
    date: 'Q2 2024',
    duration: '7 weeks',
    role: 'Solo implementation',
    readTime: '14 min read'
  },
  {
    title: 'Database Validation & Audit',
    slug: 'database-validation',
    description: 'B2B SaaS ($12M ARR). Built data quality infrastructure that reduced duplicates by 91% and restored trust in CRM data.',
    metric: '91% duplicate reduction',
    category: 'efficiency',
    label: 'Firefighting',
    badgeColor: 'amber',
    date: 'Q1 2024',
    duration: '5 weeks',
    role: 'Solo implementation',
    readTime: '13 min read'
  },
  {
    title: 'Lead Lifecycle Autopilot',
    slug: 'lead-lifecycle',
    description: 'Scaling SaaS (75→150 employees). Built standardized lifecycle and SOPs that reduced new hire ramp time by 58%.',
    metric: '58% faster onboarding',
    category: 'efficiency',
    label: 'Growth',
    badgeColor: 'blue',
    date: 'Q4 2023',
    duration: '6 weeks',
    role: 'Lead architect',
    readTime: '13 min read'
  },
  {
    title: 'GTM Stack Integration',
    slug: 'gtm-integration',
    description: 'Mid-market SaaS ($25M ARR). Unified 5 siloed systems into single source of truth, eliminating 32 hours/week of data reconciliation.',
    metric: '99% data consistency',
    category: 'efficiency',
    label: 'Firefighting',
    badgeColor: 'amber',
    date: 'Q3 2024',
    duration: '8 weeks',
    role: 'Solo implementation',
    readTime: '15 min read'
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredCaseStudies = caseStudies.filter(study => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'revenue') return study.category === 'revenue';
    if (activeFilter === 'efficiency') return study.category === 'efficiency';
    return true;
  });

  // Calculate aggregate stats
  const totalRevenue = '$2.1M+';
  const totalCostsSaved = '$98K+';
  const avgImprovement = '85%';
  const implementations = '10+';

  return (
    <>
      <Section className="pt-32 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Real case studies with real metrics from 10+ implementations across mid-market SaaS, B2B services, and property operations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">{totalRevenue}</p>
              <p className="text-sm text-slate-400">Revenue Attributed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">{totalCostsSaved}</p>
              <p className="text-sm text-slate-400">Annual Costs Eliminated</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-violet-400">{avgImprovement}</p>
              <p className="text-sm text-slate-400">Average Improvement</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-400">{implementations}</p>
              <p className="text-sm text-slate-400">Implementations</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="alternate" className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
              My Approach
            </h2>
            <p className="text-slate-300">
              Every engagement follows the same proven methodology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">1. Strategy</h3>
              <p className="text-slate-300 text-sm">
                Understand business goals, map current state, identify bottlenecks. Define success metrics and ROI targets.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">2. Implementation</h3>
              <p className="text-slate-300 text-sm">
                Build the system. Write code, architect databases, integrate APIs. Ship working infrastructure in weeks not months.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">3. Results</h3>
              <p className="text-slate-300 text-sm">
                Measure outcomes. Track KPIs, optimize performance, document learnings. Prove ROI with real numbers.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-8">
        <Container>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-50 mb-2">Filter by Category</h2>
            <p className="text-slate-400 text-sm mb-4">
              Choose what type of work you want to see
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              All Case Studies
            </button>
            <button
              onClick={() => setActiveFilter('revenue')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === 'revenue'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              Revenue Engine Building
            </button>
            <button
              onClick={() => setActiveFilter('efficiency')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === 'efficiency'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              Operational Efficiency
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <p>
              Showing {filteredCaseStudies.length} case studies
            </p>
            {activeFilter === 'revenue' && (
              <p className="text-slate-500">
                • Systems that grow pipeline, prove ROI, and drive measurable revenue
              </p>
            )}
            {activeFilter === 'efficiency' && (
              <p className="text-slate-500">
                • Infrastructure that scales, saves time, and prevents revenue leakage
              </p>
            )}
          </div>
        </Container>
      </Section>

      <Section background="alternate" className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study) => (
              <Card
                key={study.slug}
                title={study.title}
                description={study.description}
                badge={study.label + ' Mode'}
                badgeColor={study.badgeColor}
                href={'/portfolio/' + study.slug}
              >
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="px-2 py-1 bg-slate-800 rounded">
                    {study.date}
                  </span>
                  <span className="px-2 py-1 bg-slate-800 rounded">
                    {study.duration}
                  </span>
                  <span className="px-2 py-1 bg-slate-800 rounded">
                    {study.readTime}
                  </span>
                </div>

                <div className="mt-3">
                  <p className="text-slate-400 text-xs">
                    My Role: {study.role}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-cyan-400 font-bold text-lg">
                    {study.metric}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
              Want Similar Results?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Take the 3-minute assessment to discover your biggest infrastructure bottleneck and get a personalized 90-day action plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/evaluation"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200 text-lg"
              >
                Get Your 90-Day Action Plan
              </a>
              <a 
                href="/contact" 
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm underline"
              >
                Or schedule a direct call
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Free • 3 minutes • Instant results
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}