import Container from '@/components/Container'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Divack Vega',
  description: 'Get in touch for client projects, job opportunities, or general inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Section className="pt-24 pb-12">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6">
              Lets Work Together
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Whether you need someone to architect and build revenue systems, 
              automate operations, or join your team full-time - I am open to the conversation.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="alternate">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
                  Send Me a Message
                </h2>
                <p className="text-slate-400">
                  Fill out the form below and I will get back to you within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⏱️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      Response Time
                    </h3>
                    <p className="text-slate-400 text-sm">
                      I typically respond within 24 hours during business days. 
                      If it is urgent, mention it in your message.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🌎</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      Location
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      Based in Morelia, Mexico
                    </p>
                    <p className="text-slate-400 text-sm">
                      Time Zone: CST/CDT (UTC-6/-5)
                    </p>
                    <p className="text-slate-500 text-xs mt-2">
                      Available for remote work with US companies
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-50 mb-4">
                  Other Ways to Reach Me
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:divackvega@gmail.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span>📧</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-slate-500">divackvega@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/divackvega"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span>💼</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">LinkedIn</div>
                      <div className="text-xs text-slate-500">Connect with me</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/CircoUPN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span>💻</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">GitHub</div>
                      <div className="text-xs text-slate-500">See my code</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">
                      What to Expect
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>I will respond with specific questions about your needs</li>
                      <li>For projects: I will propose a clear scope and timeline</li>
                      <li>For roles: I will share relevant experience and ask about the team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}