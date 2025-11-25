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
  // Base styles for all buttons
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';

  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
    secondary: 'bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40',
    outline: 'border-2 border-slate-600 text-slate-200 hover:border-blue-500 hover:text-blue-400 focus:ring-blue-500',
  };

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}