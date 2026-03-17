import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  badge?: string;
  badgeColor?: 'blue' | 'violet' | 'green' | 'amber' | 'red';
  featured?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  href,
  badge,
  featured = false,
  children,
  className = '',
}: CardProps) {
  // Badge — amber accent, subtle
  const badgeClass = 'bg-amber-400/5 text-amber-300/80 border-amber-400/15';

  const borderStyles = featured
    ? 'border-zinc-600 shadow-sm hover:border-zinc-400 hover:shadow-white/5'
    : 'border-zinc-800 hover:border-zinc-600';

  const cardClasses = `block p-6 bg-zinc-900 border rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${borderStyles} ${className}`;

  const cardContent = (
    <>
      {badge && (
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${badgeClass}`}>
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
}