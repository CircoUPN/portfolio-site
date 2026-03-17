import Container from '@/components/Container'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Divack Vega',
  description: 'Get in touch for client projects, job opportunities, or general inquiries.',
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function IconEnvelope({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function IconLink({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  )
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────────────── */}
      <Section className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400/70 mb-4">
              Get in touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Work Together
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Whether you need someone to architect and build revenue systems,
              automate operations, or join your team full-time—I&apos;m open to the conversation.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Form + Info ──────────────────────────────────────────────── */}
      <Section background="alternate" className="border-t border-zinc-800/60">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Send Me a Message
                </h2>
                <p className="text-zinc-500">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Info — 1/3 */}
            <div className="space-y-10">

              {/* Response time */}
              <div className="border-l-2 border-zinc-700 pl-5">
                <div className="flex items-center gap-2 mb-2">
                  <IconClock className="w-4 h-4 text-amber-400/70 flex-shrink-0" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">Response Time</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  I typically respond within 24 hours on business days.
                  If it&apos;s urgent, mention it in your message.
                </p>
              </div>

              {/* Location */}
              <div className="border-l-2 border-zinc-700 pl-5">
                <div className="flex items-center gap-2 mb-2">
                  <IconMapPin className="w-4 h-4 text-amber-400/70 flex-shrink-0" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">Location</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Based in Morelia, Mexico — CST/CDT (UTC-6/-5).<br />
                  Available for remote work with US companies.
                </p>
              </div>

              {/* Social links */}
              <div className="border-l-2 border-zinc-700 pl-5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                  Other Ways to Reach Me
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      Icon: IconEnvelope,
                      label: 'Email',
                      sub: 'divackvega@gmail.com',
                      href: 'mailto:divackvega@gmail.com',
                    },
                    {
                      Icon: IconLink,
                      label: 'LinkedIn',
                      sub: 'Connect with me',
                      href: 'https://linkedin.com/in/divackvega',
                      external: true,
                    },
                    {
                      Icon: IconCode,
                      label: 'GitHub',
                      sub: 'See my code',
                      href: 'https://github.com/CircoUPN',
                      external: true,
                    },
                  ].map(({ Icon, label, sub, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-amber-400/70 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium">{label}</div>
                        <div className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">{sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="border-l-2 border-zinc-500 pl-5">
                <h3 className="text-sm font-bold text-amber-300/80 uppercase tracking-wide mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-zinc-500 leading-relaxed">
                  <li>I&apos;ll respond with specific questions about your needs</li>
                  <li>For projects: a clear scope and timeline proposal</li>
                  <li>For roles: relevant experience and questions about your team</li>
                </ul>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}