'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Word-by-word rise reveal for headings. Each word fades and lifts into
 * place with a stagger — no overflow-hidden masks, so serif-italic
 * ascenders/descenders and background-clip text stay fully visible.
 *
 * Accepts plain strings for `children`; styled fragments can be passed via
 * `segments` = [{ text, className }] when part of the line needs different
 * styling (e.g. the serif-gold highlight).
 */

const wordVariants = {
  hidden: { y: 18, opacity: 0 },
  show: (delay) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function TextReveal({
  children,
  segments,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.055,
  once = true,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[Tag] || motion.span;

  const parts = segments
    ? segments.flatMap((seg, si) =>
        String(seg.text)
          .split(' ')
          .filter(Boolean)
          .map((word) => ({ word, className: seg.className, key: `${si}-${word}` }))
      )
    : String(children)
        .split(' ')
        .filter(Boolean)
        .map((word, i) => ({ word, className: '', key: `${i}-${word}` }));

  if (reduceMotion) {
    return (
      <Tag className={className}>
        {parts.map((p, i) => (
          <span key={p.key + i} className={p.className}>
            {p.word}
            {i < parts.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.5 }}
    >
      {parts.map((p, i) => (
        <motion.span
          key={p.key + i}
          className={`inline-block will-change-transform ${p.className || ''}`}
          variants={wordVariants}
          custom={delay + i * stagger}
        >
          {p.word}
          {i < parts.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </MotionTag>
  );
}
