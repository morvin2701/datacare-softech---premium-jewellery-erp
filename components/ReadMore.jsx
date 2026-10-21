'use client';

import { useState } from 'react';

// Long copy on phones: show the first N lines with a Read more toggle.
// Desktop (lg+) always shows everything and hides the toggle.
export default function ReadMore({ children, lines = 3, className = '' }) {
  const [open, setOpen] = useState(false);
  const clamp = { 3: 'line-clamp-3', 4: 'line-clamp-4', 5: 'line-clamp-5', 6: 'line-clamp-6' }[lines] || 'line-clamp-3';
  return (
    <div className={className}>
      <div className={open ? '' : `${clamp} lg:line-clamp-none`}>{children}</div>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="mt-1.5 text-sm font-semibold text-gold-dark lg:hidden">
        {open ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
}
