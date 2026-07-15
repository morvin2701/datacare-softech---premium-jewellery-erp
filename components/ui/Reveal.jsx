'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered fade/slide-up reveal. Restrained (<400ms), respects
 * prefers-reduced-motion, and triggers once on enter.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 26,
  className = '',
  once = true,
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
