import Link from 'next/link'

interface BlogCTAProps {
  variant?: 'default' | 'compact'
}

export default function BlogCTA({ variant = 'default' }: BlogCTAProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-5 border border-blue-500/30">
        <h3 className="text-base font-semibold text-slate-50 mb-2">
          Get Your 90-Day Action Plan
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          Take the 3-minute assessment and get personalized recommendations.
        </p>
        <Link
          href="/evaluation"
          className="block w-full text-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Start Free Assessment
        </Link>
      </div>
    )
  }

  // Default full-width variant
  return (
    <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-blue-500/30">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-50 mb-3">
          Ready to Fix Your Revenue Operations?
        </h3>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          Take the 3-minute assessment to identify your biggest operational bottleneck 
          and get a personalized 90-day action plan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/evaluation"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Get Your Free Action Plan
          </Link>
          <Link
            href="/contact"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Or schedule a call →
          </Link>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Free • 3 minutes • Instant results
        </p>
      </div>
    </div>
  )
}