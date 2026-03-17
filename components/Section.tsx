import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'alternate';
}

export default function Section({
  children,
  className = '',
  background = 'default',
}: SectionProps) {
  // default  → zinc-950 (near-black, blends with gradient body)
  // alternate → zinc-900 (one step lighter, creates clear separation)
  const bgColor = background === 'alternate' ? 'bg-zinc-900' : 'bg-zinc-950';

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${bgColor} ${className}`}>
      {children}
    </section>
  );
}