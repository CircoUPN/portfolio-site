import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center pt-16">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Text Content - 60% */}
            <div className="lg:col-span-3 space-y-6">
              {/* Headline with gradient */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
                Stop Drowning in{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Execution
                </span>
                .
                <br />
                Start Focusing on{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Growth
                </span>
                .
              </h1>
              
              {/* Subheadline */}
              <div className="space-y-4">
                <p className="text-lg text-slate-300">
                  Most marketing leaders know what systems they need—but their team 
                  is at capacity, engineering has a 6-month backlog, and sales, 
                  marketing, and operations are running on disconnected tools that 
                  don't talk to each other.
                </p>
                <p className="text-lg text-slate-400">
                  I got tired of waiting. I learned to architect and build the 
                  systems myself—to make my team faster, more scalable, and more 
                  efficient. Now I design revenue infrastructure that adapts to 
                  your vision and scales with your growth. I don't just strategize—
                  I implement.
                </p>
              </div>

              {/* Callout Box */}
              <div className="flex items-start gap-3 p-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg">
                <div className="text-2xl">💡</div>
                <div>
                  <p className="text-slate-300">
                    <span className="text-cyan-400 font-semibold">Not sure where to start?</span>{' '}
                    I built a 3-minute assessment to help you identify your biggest 
                    bottleneck and the fastest path to fix it.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col items-start gap-3">
                <Button href="/evaluation" variant="primary" size="large">
                  Find Your Biggest Bottleneck
                </Button>
                <a 
                  href="/contact" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm underline"
                >
                  Or schedule a call
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-700">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-cyan-400">85%</p>
                  <p className="text-xs text-slate-400">Fewer Failures</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">$2.1M</p>
                  <p className="text-xs text-slate-400">Revenue Attributed</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-violet-400">48%</p>
                  <p className="text-xs text-slate-400">Conversion Lift</p>
                </div>
              </div>
            </div>

            {/* Professional Photo - 40% (hidden on mobile/tablet) */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="aspect-[4/5] relative rounded-xl overflow-hidden">
                    {/* Replace with actual photo - check if file exists */}
                    <Image
                      src="/divack-professional.png"
                      alt="Divack Vega - Growth Architect"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pain Profile Section */}
      <Section background="alternate" className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Which Mode Are You In?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I help companies in two very different situations. Both are valid. 
              Both need different approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Firefighting Mode */}
            <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🔥</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-50">Firefighting Mode</h3>
                  <p className="text-amber-400 text-sm font-medium">Urgent • Reactive • Fix what's broken</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  Leads leaking through the cracks—nobody follows up
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  Automations failing silently, you find out days later
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  Manual work drowning your team, can't keep up
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  Can't scale because nothing is reliable
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  Hours wasted troubleshooting instead of building
                </li>
              </ul>

              <Button href="/portfolio?filter=efficiency" variant="outline" size="medium">
                See How I Fix Broken Systems →
              </Button>
            </div>

            {/* Growth Mode */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📈</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-50">Growth Mode</h3>
                  <p className="text-cyan-400 text-sm font-medium">Strategic • Proactive • Build for scale</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  Current ops won't support 2x-5x growth
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  Need systems that adapt and scale, not break
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  Building foundation for the next stage of growth
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  Can't hire your way out of infrastructure problems
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  Need architecture and strategy, not quick fixes
                </li>
              </ul>

              <Button href="/portfolio?filter=revenue" variant="outline" size="medium">
                See How I Build Revenue Engines →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Portfolio Preview Section */}
      <Section className="py-16 lg:py-24">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-slate-400 max-w-xl">
                Real results from real implementations. Every metric is documented.
              </p>
            </div>
            <Button href="/portfolio" variant="outline" size="small" className="mt-4 md:mt-0">
              View All Case Studies →
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Watch Tower */}
            <Card
              title="Watch Tower: RevOps Monitoring"
              description="AI/ML technology company. Built comprehensive monitoring system that reduced automation failures by 85%."
              badge="🔥 Firefighting Mode"
              badgeColor="amber"
              href="/portfolio/watch-tower"
            >
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-cyan-400 font-bold text-lg">85% fewer failures</p>
                <p className="text-slate-500 text-sm">$50K+ revenue loss prevented</p>
              </div>
            </Card>

            {/* SMS Agent */}
            <Card
              title="AI SMS Leasing Agent"
              description="Property operations. Replaced $24K/year VA costs with AI automation, recovering 30-40% of previously lost leads."
              badge="🔥 Firefighting Mode"
              badgeColor="amber"
              href="/portfolio/sms-agent"
            >
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-cyan-400 font-bold text-lg">$24K cost eliminated</p>
                <p className="text-slate-500 text-sm">20:1 ROI, built in 4 weeks</p>
              </div>
            </Card>

            {/* Attribution System */}
            <Card
              title="Closed-Loop Attribution"
              description="Mid-market SaaS ($15M-$50M ARR). Nearly doubled MQL→SQL conversion from 25% to 48%."
              badge="📈 Growth Mode"
              badgeColor="blue"
              href="/portfolio/attribution-system"
            >
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-cyan-400 font-bold text-lg">48% conversion rate</p>
                <p className="text-slate-500 text-sm">$2.1M in attributed revenue</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Value Proposition Section */}
      <Section background="alternate" className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Why Work With Me?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I bridge strategy and execution. Most consultants do one or the other.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Strategic</h3>
              <p className="text-slate-400 text-sm">
                I understand business outcomes, not just technical specs. I've 
                managed P&L, set marketing budgets, and made trade-offs between 
                cost, speed, and quality. I know what matters to the business.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Technical</h3>
              <p className="text-slate-400 text-sm">
                I don't just design systems—I build them. I write code, architect 
                databases, integrate APIs, and deploy to production. When engineering 
                says "6-month backlog," I ship it in 2 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Operational</h3>
              <p className="text-slate-400 text-sm">
                I've run revenue operations at scale—50+ automations, multiple CRMs, 
                cross-functional teams. I know what breaks at 10x scale and how to 
                build systems that won't need rebuilding in 6 months.
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-700">
            <p className="text-lg text-slate-300 italic max-w-3xl mx-auto">
              "This combination is rare. Most consultants strategize but can't 
              implement. Most engineers implement but don't understand the business. 
              I bridge both worlds."
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
              Ready to Stop Firefighting and Start Scaling?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Take the 3-minute assessment to discover your biggest infrastructure 
              bottleneck and get personalized insights on how to fix it.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/evaluation" variant="primary" size="large">
                Get Your 90-Day Action Plan
              </Button>
            </div>
            
            <a 
              href="/contact" 
              className="inline-block mt-4 text-slate-400 hover:text-cyan-400 transition-colors text-sm underline"
            >
              Or schedule a direct call
            </a>
            
            <p className="text-slate-500 text-sm mt-6">
              Free • 3 minutes • Instant results
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}