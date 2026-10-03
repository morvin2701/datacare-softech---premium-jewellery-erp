import { ArrowRight, Check } from 'lucide-react';
import { deepDives } from '@/lib/content';
import { BillingVisual, KarigarVisual, LedgerVisual, PhoneVisual, RfidVisual } from './Visuals';

const blocks = [
  [deepDives.billing, BillingVisual],
  [deepDives.accounting, LedgerVisual],
  [deepDives.inventory, RfidVisual],
  [deepDives.manufacturing, KarigarVisual],
  [deepDives.mobile, PhoneVisual],
];

export default function DeepDives() {
  return (
    <div className="bg-ivory-deep">
      {blocks.map(([b, Visual], i) => {
        const flip = i % 2 === 1;
        return (
          <section key={b.id} id={b.id} aria-labelledby={`${b.id}-title`} className="section border-t border-line/70">
            <div className="container-x grid items-stretch gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 2xl:gap-24">
              <div className={`flex flex-col justify-center ${flip ? 'lg:order-2' : ''}`} data-reveal={flip ? 'right' : 'left'}>
                <p className="eyebrow">
                  {String(i + 1).padStart(2, '0')} · {b.eyebrow}
                </p>
                <h2 id={`${b.id}-title`} className="h2 mt-4">
                  {b.title}
                </h2>
                {b.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-5 leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {b.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-dark transition hover:gap-3">
                  See {b.eyebrow.toLowerCase()} in a free demo <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className={`flex ${flip ? 'lg:order-1' : ''}`} data-reveal="zoom" style={{ '--delay': '120ms' }}>
                <Visual />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
