'use client';

import { useEffect, useRef, useState } from 'react';

// A sample bill that "types itself" — shows rate auto-fill, making, GST,
// old-gold exchange and HUID in one glance. Purely illustrative numbers.
const lines = [
  { k: 'Necklace 22K · 12.320 g', v: 'HUID ✓', badge: true },
  { k: 'Rate (auto-filled)', v: '₹ 9,250 / g' },
  { k: 'Making 8% + GST 3%', v: '₹ 12,809' },
  { k: 'Old gold 5.000 g', v: '− ₹ 43,000', minus: true },
];
const TOTAL = 83769;

export default function HeroInvoice() {
  const [step, setStep] = useState(0);
  const [total, setTotal] = useState(0);
  const raf = useRef();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(lines.length + 1);
      setTotal(TOTAL);
      return;
    }
    let s = 0;
    const id = setInterval(() => {
      s = s > lines.length + 5 ? 0 : s + 1;
      setStep(s);
    }, 650);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    cancelAnimationFrame(raf.current);
    if (step === 0) return setTotal(0);
    if (step !== lines.length + 1) return;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 1100);
      setTotal(Math.round(TOTAL * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [step]);

  return (
    <div className="w-[15.5rem] rounded-2xl border border-white/60 bg-white/95 p-3.5 text-ink shadow-lift backdrop-blur sm:w-[17rem]" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-dashed border-line pb-2.5">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">Tax invoice · sample</p>
          <p className="font-display text-[0.95rem] font-semibold">DataCare Next POS</p>
        </div>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
      </div>
      <ul className="mt-2 space-y-1.5 text-[0.75rem]">
        {lines.map((l, i) => (
          <li
            key={l.k}
            className={`flex items-center justify-between gap-3 transition-all duration-500 ${
              step > i ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
            }`}
          >
            <span className="truncate text-ink-muted">{l.k}</span>
            {l.badge ? (
              <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.68rem] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                {l.v}
              </span>
            ) : (
              <span className={`font-semibold tabular-nums ${l.minus ? 'text-emerald-700' : ''}`}>{l.v}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-end justify-between rounded-xl bg-navy px-3 py-2.5 text-white">
        <span className="text-[0.65rem] uppercase tracking-[0.16em] text-white/60">Net payable</span>
        <span className="font-display text-xl font-semibold tabular-nums text-gold-light">
          ₹ {total.toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
}
