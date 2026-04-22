import React from 'react';
import { cn } from '../lib/utils';

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-sage text-cream hover:bg-forest shadow-lg shadow-sage/10',
    secondary: 'bg-clay text-cream hover:bg-clay/90 shadow-lg shadow-clay/10',
    outline: 'border border-sage text-sage hover:bg-sage hover:text-cream',
    ghost: 'text-forest hover:bg-sage/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all active:scale-95 flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  dark = false,
}) => {
  return (
    <div className={cn('mb-12', centered ? 'text-center' : 'text-left')}>
      {subtitle && (
        <span className={cn('block text-xs uppercase tracking-[0.2em] font-bold mb-3', dark ? 'text-cream/50' : 'text-sage-light')}>
          {subtitle}
        </span>
      )}
      <h2 className={cn('text-3xl md:text-5xl font-bold leading-tight', dark ? 'text-cream' : 'text-forest')}>
        {title}
      </h2>
      <div className={cn('h-1 w-20 mt-4 bg-clay', centered ? 'mx-auto' : '')}></div>
    </div>
  );
};
