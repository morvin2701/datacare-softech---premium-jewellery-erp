'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Phone frame that cycles through real app screens. Tap a dot to jump;
// auto-advance pauses while the pointer is over it.
export default function PhoneReel({ screens, alt }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % screens.length), 3200);
    return () => clearInterval(id);
  }, [paused, screens.length]);

  return (
    <div className="flex flex-col items-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative w-[14.5rem] rounded-[2.4rem] border-[7px] border-navy-muted bg-navy shadow-[0_40px_80px_-30px_rgba(0,0,0,.85)] sm:w-[16rem]">
        <div className="relative aspect-[640/1313] overflow-hidden rounded-[1.9rem] bg-white">
          {screens.map((s, k) => (
            <Image
              key={s.src}
              src={s.src}
              alt={k === i ? `${alt} – ${s.label}` : ''}
              fill
              sizes="256px"
              loading={k === 0 ? 'eager' : 'lazy'}
              className="object-cover object-top transition-opacity duration-700 ease-premium"
              style={{ opacity: k === i ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 h-5 text-center text-sm font-medium text-white/85" aria-live="polite">
        {screens[i].label}
      </p>
      <div className="mt-3 flex items-center gap-1.5" role="tablist" aria-label="App screens">
        {screens.map((s, k) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={k === i}
            aria-label={s.label}
            onClick={() => setI(k)}
            className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-6 bg-gold' : 'w-1.5 bg-white/25 hover:bg-white/50'} !border-0 !p-0`}
          />
        ))}
      </div>
    </div>
  );
}
