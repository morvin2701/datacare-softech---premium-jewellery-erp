'use client';

import { useRef } from 'react';
import { cn } from '../../lib/utils';

/**
 * Card with a mouse-follow radial "spotlight" wash plus a border glow that
 * tracks the cursor. Pure CSS variables — zero re-renders on mousemove.
 * Use on light surfaces; pass dark for navy surfaces.
 */
export default function SpotlightCard({
  as: Tag = 'div',
  dark = false,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={cn('spotlight-card', dark && 'spotlight-card-dark', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
