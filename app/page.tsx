import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function IconArrowsPath({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Section className="min-h-screen flex items-center pt-24 pb-16">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-3 space-y-8">

              {/* Eyebrow — amber accent */}
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-400/70">
                Growth Architect & RevOps Strategist
              </p>

              {/* H1 — warm amber-to-grey gradient on key word */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Stop Drowning in Execution.
                <br />
                Start Focusing on{' '}
                <span className="bg-gradient-to-r from-amber-200 to-zinc-400 bg-clip-text text-transparent">
                  Growth
                </span>
                .
              </h1>

              <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                I design and build the revenue infrastructure that marketing,
                sales, and ops teams need—but can&apos;t get from engineering
                fast enough.
              </p>

              <ul className="space-y-3">
                {[
                  'Strategy + technical execution, not one or the other',
                  'Ships in weeks, not 6-month engineering backlogs',
                  'Proven ROI across SaaS, B2B services, and operations',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-zinc-300">
                    {/* Icon — amber accent */}
                    <svg className="mt-1 flex-shrink-0 w-4 h-4 text-amber-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button href="/evaluation" variant="primary" size="large">
                  Find Your Biggest Bottleneck
                </Button>
                <a href="/contact" className="text-zinc-500 hover:text-zinc-200 transition-colors text-sm">
                  Or schedule a call →
                </a>
              </div>

              {/* Stats — amber accent on numbers */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-amber-300">85%</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Fewer Failures</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-amber-300">$2.1M</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Revenue Attributed</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-amber-300">48%</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Conversion Lift</p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-amber-400/5 to-zinc-600/10 rounded-3xl blur-3xl" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-zinc-800">
                  <Image
                    src="/divack-professional.png"
                    alt="Divack Vega — Growth Architect"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── Which Mode Are You In? ────────────────────────────────────── */}
      <Section background="alternate" className="py-16 lg:py-24 border-t border-zinc-800/60">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Which Mode Are You In?
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              I help companies in two very different situations. Both need a different approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

            <div className="border-l-2 border-zinc-700 pl-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  {/* Icon — amber accent */}
                  <IconBolt className="w-4 h-4 text-amber-400/70" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-amber-400/70">Firefighting Mode</p>
                  <p className="text-xs text-zinc-600">Urgent · Reactive · Fix what&apos;s broken</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Automations failing silently—you find out days later',
                  'Leads leaking through the cracks, nobody follows up',
                  "Manual work drowning your team, can't keep up",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/portfolio?filter=efficiency" variant="outline" size="medium">
                See How I Fix Broken Systems →
              </Button>
            </div>

            <div className="border-l-2 border-zinc-500 pl-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  {/* Icon — amber accent */}
                  <IconTrendingUp className="w-4 h-4 text-amber-400/70" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-amber-400/70">Growth Mode</p>
                  <p className="text-xs text-zinc-600">Strategic · Proactive · Build for scale</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Current ops won't support 2x–5x growth",
                  'Need systems that scale—not break—under pressure',
                  "Can't hire your way out of infrastructure problems",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/portfolio?filter=revenue" variant="outline" size="medium">
                See How I Build Revenue Engines →
              </Button>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── Featured Case Studies ─────────────────────────────────────── */}
      <Section className="py-16 lg:py-24 border-t border-zinc-800/60">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Featured Case Studies
              </h2>
              <p className="text-zinc-500">
                Real results from real implementations. Every metric is documented.
              </p>
            </div>
            <Button href="/portfolio" variant="outline" size="small" className="mt-4 md:mt-0 self-start md:self-auto">
              View All 10 Case Studies →
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card featured title="Watch Tower: RevOps Monitoring"
              description="Built a comprehensive monitoring system for an AI/ML company that caught automation failures before they became revenue loss."
              badge="Operational Efficiency" href="/portfolio/watch-tower">
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="text-amber-300 font-bold text-lg">85% fewer failures</p>
                <p className="text-zinc-600 text-sm">$50K+ revenue loss prevented</p>
              </div>
            </Card>

            <Card featured title="AI SMS Leasing Agent"
              description="Replaced $24K/year in VA costs with AI automation across 3 properties, recovering 30–40% of previously lost leads."
              badge="Operational Efficiency" href="/portfolio/sms-agent">
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="text-amber-300 font-bold text-lg">$24K cost eliminated</p>
                <p className="text-zinc-600 text-sm">20:1 ROI, built in 4 weeks</p>
              </div>
            </Card>

            <Card featured title="Closed-Loop Attribution"
              description="Rebuilt attribution from scratch for a $15M–$50M ARR SaaS, nearly doubling MQL→SQL conversion and proving $2.1M in revenue."
              badge="Revenue Engine" href="/portfolio/attribution-system">
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="text-amber-300 font-bold text-lg">48% conversion rate</p>
                <p className="text-zinc-600 text-sm">$2.1M in attributed revenue</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ── Why Work With Me? ─────────────────────────────────────────── */}
      <Section background="alternate" className="py-16 lg:py-24 border-t border-zinc-800/60">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Why Work With Me?
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              I bridge strategy and execution. Most consultants do one or the other.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {[
              { Icon: IconCheckCircle, title: 'Strategic',    body: "I understand P&L, marketing budgets, and the trade-offs between cost, speed, and quality. I know what the business actually needs." },
              { Icon: IconCode,        title: 'Technical',    body: 'I write code, architect databases, and integrate APIs. When engineering says "6-month backlog," I ship it in 2 weeks.' },
              { Icon: IconArrowsPath,  title: 'Operational',  body: "I've run RevOps at scale—50+ automations, multiple CRMs, cross-functional teams. I know what breaks at 10x and plan for it." },
            ].map(({ Icon, title, body }) => (
              <div key={title}>
                <div className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-zinc-800 flex items-center justify-center mb-4">
                  {/* Icon — amber accent */}
                  <Icon className="w-4 h-4 text-amber-400/70" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center pt-8 border-t border-zinc-800/60">
            <p className="text-lg text-zinc-300 leading-relaxed">
              &ldquo;Most consultants strategize but can&apos;t implement. Most engineers
              implement but don&apos;t understand the business.
              {/* Keyword emphasis — amber accent */}
              <span className="text-amber-300/90 font-semibold"> I bridge both worlds.</span>&rdquo;
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <Section className="py-20 lg:py-28 border-t border-zinc-800/60">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Stop Firefighting<br className="hidden sm:block" /> and Start Scaling?
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Take the 3-minute assessment to find your biggest infrastructure
              bottleneck and get a personalized action plan.
            </p>
            <Button href="/evaluation" variant="primary" size="large">
              Get Your Free 90-Day Action Plan
            </Button>
            <p className="mt-4">
              <a href="/contact" className="text-zinc-600 hover:text-zinc-300 transition-colors text-sm">
                Or schedule a direct call →
              </a>
            </p>
            <p className="text-zinc-800 text-xs mt-6 tracking-wide uppercase">
              Free · 3 minutes · Instant results
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}