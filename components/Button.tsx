import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950';

  const variantStyles = {
    // White bg / black text — high contrast, editorial
    primary:
      'bg-white text-zinc-950 hover:bg-zinc-100 focus:ring-white shadow-lg shadow-white/10 hover:shadow-white/20',
    // Slightly off-white for secondary actions
    secondary:
      'bg-zinc-100 text-zinc-900 hover:bg-white focus:ring-zinc-300 shadow-lg shadow-white/5',
    // Subtle border, low-key — steps up on hover
    outline:
      'border border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white focus:ring-zinc-500',
  };

  const sizeStyles = {
    small:  'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large:  'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}