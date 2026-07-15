'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Single button family reused across every section.
 * - primary: filled gold
 * - secondary: outline (light surfaces)
 * - secondaryDark: outline (navy surfaces)
 * - ghost: text-only
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold tracking-tight transition-colors duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 select-none';

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants = {
  primary:
    'btn-shine bg-gold text-navy shadow-gold hover:bg-gold-light hover:shadow-gold-lg',
  secondary:
    'border border-ink/15 bg-white text-ink hover:border-gold hover:text-gold-dark',
  secondaryDark:
    'border border-white/25 bg-transparent text-white hover:border-gold hover:text-gold',
  ghost: 'text-ink hover:text-gold-dark',
};

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = as === 'a' ? motion.a : motion.button;

  return (
    <MotionTag
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {Icon ? <Icon size={18} strokeWidth={2} aria-hidden="true" /> : null}
      {children}
      {IconRight ? (
        <IconRight size={18} strokeWidth={2} aria-hidden="true" />
      ) : null}
    </MotionTag>
  );
}
