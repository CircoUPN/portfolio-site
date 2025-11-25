'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';

const caseStudies = [
  {
    title: 'Watch Tower: Revenue Operations Monitoring',
    slug: 'watch-tower',
    description: 'AI/ML technology company. Built comprehensive monitoring system that reduced automation failures by 85% and prevented over 50K in annual revenue loss.',
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
    description: 'Property operations with 3 properties. Replaced 24K per year VA costs with AI automation, recovering 30-40% of previously lost leads.',
    metric: '24K cost eliminated',
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
    description: 'Mid-market SaaS between 15M and 50M ARR. Nearly doubled conversion from 25% to 48% and attributed 2.1M in revenue.',
    metric: '48% conversion rate',
    category: 'revenue',
    label: 'Growth',
    badgeColor: 'cyan',
    date: '2023-2024',
    duration: '8-10 weeks',
    role: 'Lead architect',
    readTime: '18 min read'
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCaseStudies = caseStudies.filter(study => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'revenue') return study.category === 'revenue';
    if (activeFilter === 'efficiency') return study.category === 'efficiency';
    return true;
  });

  return (
    <>
      <Section className="pt-32 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Real case studies with real metrics from 5+ implementations across mid-market SaaS and property operations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">$2.1M+</p>
              <p className="text-sm text-slate-400">Revenue Attributed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">$74K+</p>
              <p className="text-sm text-slate-400">Annual Costs Eliminated</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-violet-400">85%</p>
              <p className="text-sm text-slate-400">Average Improvement</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-400">5+</p>
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
                Measure outcomes. Track KPIs optimize performance document learnings. Prove ROI with real numbers.
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

          <p className="text-slate-400 text-sm">
            Showing {filteredCaseStudies.length} case studies
          </p>
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
              Take the 3-minute assessment to discover your biggest infrastructure bottleneck.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/evaluation"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200 text-lg"
              >
                Find Your Biggest Bottleneck
              </a>
              <a 
                href="/contact" 
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm underline"
              >
                Or schedule a direct call
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Free, 3 minutes, Instant results
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}