import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center pt-16">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Text Content - 60% */}
            <div className="lg:col-span-3 space-y-6">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
                Stop Drowning in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Execution
                </span>
                .
                <br />
                Start Focusing on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  Growth
                </span>
                .
              </h1>

              {/* Subheadline */}
              <div className="space-y-4 text-lg md:text-xl text-slate-300 leading-relaxed">
                <p>
                  Most marketing leaders know what systems they need—but their team is at capacity, 
                  engineering has a 6-month backlog, and sales, marketing, and operations are running on 
                  disconnected tools that don't talk to each other.
                </p>
                <p>
                  I got tired of waiting. I learned to architect and build the systems myself—to make my 
                  team faster, more scalable, and more efficient. Now I design revenue infrastructure that 
                  adapts to your vision and scales with your growth.{' '}
                  <span className="text-slate-50 font-semibold">I don't just strategize—I implement.</span>
                </p>
              </div>

              {/* CTA Guidance - Prominent Callout */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 border border-cyan-500/30">
                <div className="text-2xl pt-0.5">💡</div>
                <p className="text-base md:text-lg text-cyan-100 leading-relaxed">
                  <span className="font-semibold">Not sure where to start?</span> I built a 3-minute assessment 
                  to help you identify your biggest bottleneck and the fastest path to fix it.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col items-start gap-3 pt-4">
                <Button 
                  variant="primary" 
                  size="large"
                  href="/evaluation"
                >
                  Find Your Biggest Bottleneck
                </Button>
                <a 
                  href="/contact" 
                  className="text-sm text-slate-400 hover:text-cyan-400 underline transition-colors"
                >
                  Or schedule a call
                </a>
              </div>

              {/* Quick Stats - Compact for mobile, one row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-700">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">85%</div>
                  <div className="text-xs sm:text-sm text-slate-400">Fewer Failures</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-violet-400">$2.1M</div>
                  <div className="text-xs sm:text-sm text-slate-400">Revenue Attributed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">48%</div>
                  <div className="text-xs sm:text-sm text-slate-400">Conversion Lift</div>
                </div>
              </div>
            </div>

            {/* Professional Photo - 40% (hidden on mobile/tablet, visible on desktop lg+) */}
            <div className="hidden lg:block lg:col-span-2 relative">
              <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden border-2 border-slate-700 shadow-2xl shadow-blue-500/20">
                <Image
                  src="/divack-professional.png"
                  alt="Divack Vega - Revenue Operations Architect"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pain Profile Section - Firefighting vs Growth */}
      <Section background="alternate">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              Which Describes Your Situation?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Whether you're firefighting daily failures or architecting for scale, I've built systems that solve both.
            </p>
          </div>

          {/* Two Pain Profile Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Firefighting Mode Card */}
            <div className="group relative bg-slate-900 border-2 border-amber-500/30 hover:border-amber-500/60 rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20">
              {/* Icon/Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🔥</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-50">Firefighting Mode</h3>
                  <p className="text-sm text-amber-400 font-semibold">You Need This Fixed Now</p>
                </div>
              </div>

              {/* Pain Points */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Leads leaking through the cracks—nobody follows up</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Automations failing silently, you find out days later</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Manual work drowning your team, can't keep up</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Can't scale because nothing is reliable</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Hours wasted troubleshooting instead of building</span>
                </li>
              </ul>

              {/* CTA */}
              <Button 
                variant="secondary" 
                size="large"
                href="/portfolio"
                className="w-full bg-amber-600 hover:bg-amber-700 border-amber-600"
              >
                See How I Fix This
              </Button>
            </div>

            {/* Growth Mode Card */}
            <div className="group relative bg-slate-900 border-2 border-cyan-500/30 hover:border-cyan-500/60 rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20">
              {/* Icon/Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">📈</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-50">Growth Mode</h3>
                  <p className="text-sm text-cyan-400 font-semibold">You're Building for Scale</p>
                </div>
              </div>

              {/* Pain Points */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Current ops won't support 2x-5x growth</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Need systems that adapt and scale, not break</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Building foundation for the next stage of growth</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Can't hire your way out of infrastructure problems</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Need architecture and strategy, not quick fixes</span>
                </li>
              </ul>

              {/* CTA */}
              <Button 
                variant="primary" 
                size="large"
                href="/portfolio"
                className="w-full"
              >
                See How I Build This
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Portfolio Preview Section */}
      <Section>
        <Container>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              See How It Works
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Real systems I've built. Real metrics. Real business impact.
            </p>
          </div>

          {/* Case Study Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Watch Tower Case Study */}
            <Card
              title="Watch Tower: Revenue Operations Monitoring"
              description="Comprehensive monitoring system that reduced automation failures by 85% and saved $50K+ in annual revenue leakage. Built automated recovery workflows and real-time alerting across 50+ daily workflows."
              badge="🔥 Firefighting Mode"
              badgeColor="amber"
              href="/portfolio/watch-tower"
            >
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-amber-400">85%</span>
                  <span className="text-slate-400 text-sm">fewer failures</span>
                </div>
                <div className="mt-2 text-slate-500 text-sm">
                  Mean time to detection: Days → Minutes
                </div>
              </div>
            </Card>

            {/* AI SMS Leasing Agent Case Study */}
            <Card
              title="AI SMS Leasing Agent: Cost Optimization"
              description="Intelligent SMS automation handling tenant inquiries, qualification, and tour scheduling 24/7. Eliminated $24K/year in VA costs while recovering 30-40% of leads through instant response times."
              badge="🔥 Firefighting Mode"
              badgeColor="amber"
              href="/portfolio/sms-agent"
            >
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-amber-400">$24K</span>
                  <span className="text-slate-400 text-sm">annual savings</span>
                </div>
                <div className="mt-2 text-slate-500 text-sm">
                  20:1 ROI on technology investment
                </div>
              </div>
            </Card>

            {/* Attribution System Case Study */}
            <Card
              title="Closed-Loop Attribution & Pipeline Recovery"
              description="End-to-end revenue operations infrastructure connecting marketing, sales, and CS. Nearly doubled MQL→SQL conversion, cut sales cycle by 35 days, and attributed $2.1M in first-year revenue."
              badge="📈 Growth Mode"
              badgeColor="blue"
              href="/portfolio/attribution-system"
            >
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-cyan-400">48%</span>
                  <span className="text-slate-400 text-sm">conversion rate</span>
                </div>
                <div className="mt-2 text-slate-500 text-sm">
                  From 25% to 48% MQL→SQL conversion
                </div>
              </div>
            </Card>
          </div>

          {/* CTA to Full Portfolio */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="large"
              href="/portfolio"
            >
              View All Case Studies
            </Button>
          </div>
        </Container>
      </Section>

      {/* Value Proposition Section - Why I'm Different */}
      <Section background="alternate">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              Why Companies Choose Me
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Most people can do one. Few can do two. I do all three.
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Strategic */}
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-50">Strategic</h3>
              <p className="text-slate-300 leading-relaxed">
                I understand business outcomes, not just technical specs. I've managed P&L, set marketing budgets, 
                and made trade-offs between cost, speed, and quality. I know what matters to the business.
              </p>
            </div>

            {/* Technical */}
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-slate-50">Technical</h3>
              <p className="text-slate-300 leading-relaxed">
                I don't just design systems—I build them. I write code, architect databases, integrate APIs, 
                and deploy to production. When engineering says "6-month backlog," I ship it in 2 weeks.
              </p>
            </div>

            {/* Operational */}
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-slate-50">Operational</h3>
              <p className="text-slate-300 leading-relaxed">
                I've run revenue operations at scale—50+ automations, multiple CRMs, cross-functional teams. 
                I know what breaks at 10x scale and how to build systems that won't need rebuilding in 6 months.
              </p>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-12 lg:mt-16 text-center">
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
              This combination is rare. Most consultants strategize but can't implement. 
              Most engineers implement but don't understand the business. 
              <span className="text-slate-50 font-semibold"> I bridge both worlds.</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50">
              Ready to Stop Firefighting and Start Scaling?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Take the 3-minute assessment to discover your biggest infrastructure bottleneck 
              and get personalized insights on how to fix it.
            </p>
            <div className="flex flex-col items-center gap-3 pt-4">
              <Button 
                variant="primary" 
                size="large"
                href="/evaluation"
              >
                Find Your Biggest Bottleneck
              </Button>
              <a 
                href="/contact" 
                className="text-sm text-slate-400 hover:text-cyan-400 underline transition-colors"
              >
                Or schedule a direct call
              </a>
            </div>
            <p className="text-sm text-slate-500 pt-4">
              Free • 3 minutes • Instant results
            </p>
          </div>
        </Container>
      </Section>

      {/* More sections will go here in next steps */}
    </>
  );
}