import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  badge?: string;
  badgeColor?: 'blue' | 'violet' | 'green' | 'amber' | 'red';
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  href,
  badge,
  badgeColor = 'blue',
  children,
  className = '',
}: CardProps) {
  const badgeColors = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  const cardContent = (
    <>
      {badge && (
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${badgeColors[badgeColor]}`}>
          {badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </>
  );

  const cardClasses = `block p-6 bg-slate-800 border border-slate-700 rounded-xl transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 ${className}`;

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
}