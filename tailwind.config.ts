import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette - AuthKit inspired
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          dark: '#2563eb',    // blue-600
          light: '#60a5fa',   // blue-400
        },
        secondary: {
          DEFAULT: '#8b5cf6', // violet-500
          dark: '#7c3aed',    // violet-600
          light: '#a78bfa',   // violet-400
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2',    // cyan-600
          light: '#22d3ee',   // cyan-400
        },
        success: {
          DEFAULT: '#10b981', // emerald-500
          dark: '#059669',    // emerald-600
          light: '#34d399',   // emerald-400
        },
        warning: {
          DEFAULT: '#f59e0b', // amber-500
          dark: '#d97706',    // amber-600
          light: '#fbbf24',   // amber-400
        },
        danger: {
          DEFAULT: '#ef4444', // red-500
          dark: '#dc2626',    // red-600
          light: '#f87171',   // red-400
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],     // 60px
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],         // 48px
        'section': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],   // 36px
        'subsection': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 30px
        'card': ['1.5rem', { lineHeight: '1.4' }],                                  // 24px
      },
      spacing: {
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
        '128': '32rem',  // 512px
      },
      maxWidth: {
        '8xl': '88rem',  // 1408px
        '9xl': '96rem',  // 1536px
      },
    },
  },
  plugins: [],
} satisfies Config;