import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'alternate';
}

export default function Section({ 
  children, 
  className = '',
  background = 'default' 
}: SectionProps) {
  const bgColor = background === 'alternate' ? 'bg-slate-800' : 'bg-slate-900';
  
  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${bgColor} ${className}`}>
      {children}
    </section>
  );
}