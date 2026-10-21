'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { solutions } from '@/lib/content';

// Desktop: six cards. Phones: compact rows that expand on tap (first open),
// so the section is a short list instead of a very long scroll.
export default function Solutions() {
  const [open, setOpen] = useState(0);

  return (
    <section id="solutions" className="section relative bg-ivory-deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who it is for"
          title={
            <>
              One Jewellery ERP for <em className="gold-text">every type</em> of jewellery business
            </>
          }
          intro="Retailer, wholesaler, manufacturer or chain — one jewellery management software that adapts to how you work, and grows with you from a single counter to many branches."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:gap-5 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const expanded = open === i;
            return (
              <article
                key={s.title}
                className={`spot group relative overflow-hidden rounded-2xl border bg-white shadow-card transition duration-500 ease-premium lg:rounded-card lg:border-line lg:p-7 lg:hover:-translate-y-1 lg:hover:shadow-lift ${
                  expanded ? 'border-gold/50' : 'border-line'
                }`}
                data-reveal
                style={{ '--delay': `${(i % 3) * 90}ms` }}
              >
                <span aria-hidden="true" className="absolute right-6 top-5 hidden font-display text-5xl italic leading-none text-gold/20 transition duration-700 group-hover:text-gold/50 lg:block">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Header: tappable on phones, static on desktop */}
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? -1 : i)}
                  aria-expanded={expanded}
                  aria-controls={`solution-${i}`}
                  className="flex w-full items-center gap-3.5 p-4 text-left lg:pointer-events-none lg:block lg:p-0"
                >
                  <span className="icon-chip relative !h-11 !w-11 shrink-0">
                    <Icon name={s.icon} />
                  </span>
                  <span className="min-w-0 flex-1 lg:mt-5 lg:block">
                    <h3 className="relative font-display text-[1.15rem] font-medium leading-tight text-ink lg:text-2xl">{s.title}</h3>
                    <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-gold-dark lg:hidden">{s.plan}</span>
                  </span>
                  <ChevronDown size={18} className={`shrink-0 text-ink-faint transition duration-500 lg:hidden ${expanded ? 'rotate-180 text-gold-dark' : ''}`} aria-hidden="true" />
                </button>

                <div id={`solution-${i}`} className={`${expanded ? 'block' : 'hidden'} px-4 pb-5 lg:block lg:px-0 lg:pb-0`}>
                  <p className="relative leading-relaxed text-ink-muted lg:mt-3">{s.text}</p>
                  <p className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold text-gold-dark lg:mt-5">
                    Recommended: {s.plan}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
