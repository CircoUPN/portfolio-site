export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-xl font-bold text-white mb-4">Divack Vega</p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a href="mailto:divackvega@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/CircoUPN" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © {currentYear} Divack Vega. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}