import Link from 'next/link'

interface BlogCTAProps {
  variant?: 'default' | 'compact'
}

export default function BlogCTA({ variant = 'default' }: BlogCTAProps) {
  if (variant === 'compact') {
    return (
      <div className="border-l-2 border-zinc-700 pl-6">
        <h3 className="text-base font-semibold text-white mb-2">
          Get Your 90-Day Action Plan
        </h3>
        <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
          Take the 3-minute assessment and get personalized recommendations.
        </p>
        <Link
          href="/evaluation"
          className="inline-flex items-center justify-center px-4 py-2.5 bg-white text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
        >
          Start Free Assessment
        </Link>
      </div>
    )
  }

  return (
    <div className="border-t border-zinc-800 pt-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Ready to Fix Your Revenue Operations?
      </h3>
      <p className="text-zinc-500 mb-8 max-w-xl mx-auto leading-relaxed">
        Take the 3-minute assessment to identify your biggest operational bottleneck
        and get a personalized 90-day action plan.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/evaluation"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-950 font-medium rounded-lg hover:bg-zinc-100 transition-colors shadow-lg shadow-white/10"
        >
          Get Your Free Action Plan
        </Link>
        <Link
          href="/contact"
          className="text-zinc-600 hover:text-zinc-300 transition-colors text-sm"
        >
          Or schedule a call →
        </Link>
      </div>
      <p className="text-xs text-zinc-700 mt-6 tracking-wide uppercase">
        Free · 3 minutes · Instant results
      </p>
    </div>
  )
}