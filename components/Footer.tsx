export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-base font-semibold text-white mb-4 tracking-tight">Divack Vega</p>

          <div className="flex justify-center gap-8 mb-6">
            <a href="mailto:divackvega@gmail.com" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/CircoUPN" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-white transition-colors">
              GitHub
            </a>
          </div>

          <p className="text-xs text-zinc-700">
            © {currentYear} Divack Vega. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}