'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { featureGroups } from '@/lib/content';

const groupIcons = ['ReceiptIndianRupee', 'Barcode', 'Hammer', 'BookOpenCheck', 'Smartphone'];
const groupTaglines = [
  'Scan the tag, the bill fills itself.',
  'Every gram tracked from tag to sale.',
  'Know how much gold is outside the shop.',
  'Rupees and grams, side by side.',
  'Run the business from your phone.',
];
const total = featureGroups.reduce((n, g) => n + g.items.length, 0);

export default function Features() {
  const [g, setG] = useState(0);
  const [f, setF] = useState(0);
  const [paused, setPaused] = useState(false);
  const group = featureGroups[g];
  const feature = group.items[f] || group.items[0];

  // Slowly walk through the features of the open module until the visitor interacts.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setF((i) => (i + 1) % group.items.length), 2800);
    return () => clearInterval(id);
  }, [paused, group.items.length]);

  const pick = (gi) => {
    setG(gi);
    setF(0);
  };

  return (
    <section id="features" className="section relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container-x">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              {total} features. <em className="gold-text">One jewellery software.</em>
            </>
          }
          intro="Billing, barcode stock, karigar, accounts, girvi, gold schemes and mobile — one jewellery management software. Pick a module to see what's inside."
        />

        {/* Module tabs */}
        <div className="-mx-4 mt-12 overflow-x-auto px-4 pb-2 no-scrollbar" data-reveal>
          <div role="tablist" aria-label="Feature modules" className="flex min-w-max gap-3 lg:grid lg:min-w-0 lg:grid-cols-5">
            {featureGroups.map((grp, i) => {
              const active = i === g;
              return (
                <button
                  key={grp.title}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => pick(i)}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition duration-500 ease-premium ${
                    active ? 'border-transparent bg-navy text-white shadow-lift' : 'border-line bg-white text-ink hover:-translate-y-0.5 hover:border-gold/60'
                  }`}
                >
                  <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${active ? 'bg-gold text-navy' : 'bg-gold-soft text-gold-dark'}`}>
                    <Icon name={groupIcons[i]} size={21} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] font-semibold leading-tight">{grp.title}</span>
                    <span className={`block text-xs ${active ? 'text-white/55' : 'text-ink-faint'}`}>{grp.items.length} features</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Screen */}
        <div key={group.title} className="dark-surface relative mt-5 overflow-hidden rounded-[1.75rem] text-white shadow-lift" style={{ animation: 'hero-in 0.5s var(--ease) both' }}>
          <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-[1.25fr_0.75fr]">
            {/* Tiles */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <p className="font-display text-xl sm:text-2xl">
                  {group.title} <span className="text-gold-light">· {groupTaglines[g]}</span>
                </p>
                <span className="hidden shrink-0 rounded-full bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-wider text-white/50 sm:inline-block">Hover or tap</span>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {group.items.map((it, i) => {
                  const active = i === f;
                  return (
                    <li key={it.title}>
                      <button
                        type="button"
                        onMouseEnter={() => setF(i)}
                        onFocus={() => setF(i)}
                        onClick={() => setF(i)}
                        aria-pressed={active}
                        className={`flex h-full w-full flex-col items-start gap-3 rounded-2xl border p-4 text-left transition duration-300 ${
                          active ? 'border-gold/70 bg-gold/15 shadow-gold' : 'border-white/10 bg-white/[0.04] hover:border-gold/40 hover:bg-white/[0.08]'
                        }`}
                        style={{ animation: `hero-in 0.4s var(--ease) ${i * 45}ms both` }}
                      >
                        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ${active ? 'bg-gold text-navy' : 'bg-gold/10 text-gold-light'}`}>
                          <Icon name={it.icon} size={19} />
                        </span>
                        <span className="text-[0.86rem] font-semibold leading-snug">{it.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Detail */}
            <div className="flex flex-col border-t border-white/10 bg-navy/60 p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div key={feature.title} style={{ animation: 'hero-in 0.4s var(--ease) both' }} className="flex-1">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy shadow-gold">
                  <Icon name={feature.icon} size={26} />
                </span>
                <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-light">{group.title}</p>
                <h3 className="mt-1.5 font-display text-2xl leading-tight sm:text-3xl">{feature.title}</h3>
                <p className="mt-4 leading-relaxed text-white/75">{feature.text}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5" aria-hidden="true">
                {group.items.map((_, i) => (
                  <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === f ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'}`} />
                ))}
              </div>
              <a href="#contact" className="btn-gold mt-6 w-full">
                See {group.title.toLowerCase()} in a free demo <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Full list for search engines and assistive tech — all features, all modules. */}
        <div className="sr-only">
          {featureGroups.map((grp) => (
            <div key={grp.title}>
              <h3>{grp.title}</h3>
              <ul>
                {grp.items.map((it) => (
                  <li key={it.title}>
                    <strong>{it.title}:</strong> {it.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {[
            ['BadgeCheck', 'GST & HUID ready', 'Compliant bills from day one'],
            ['Barcode', 'Barcode, RFID & scale', 'All counter hardware connected'],
            ['Smartphone', 'Android & iOS owner app', 'Your shop in your pocket'],
            ['Users', 'Set up & trained by us', 'Our team, not a call centre'],
          ].map(([icon, title, sub], i) => (
            <li key={title} className="card spot flex items-center gap-3.5 px-4 py-3.5 hover:-translate-y-0.5" style={{ '--delay': `${i * 70}ms` }} data-reveal>
              <span className="icon-chip !h-10 !w-10">
                <Icon name={icon} size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-tight text-ink">{title}</span>
                <span className="block truncate text-xs text-ink-faint">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
