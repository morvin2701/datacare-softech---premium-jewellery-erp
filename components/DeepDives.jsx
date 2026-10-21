import { ArrowRight, Check } from 'lucide-react';
import ReadMore from './ReadMore';
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
          <section key={b.id} id={b.id} aria-labelledby={`${b.id}-title`} className="border-t border-line/70 py-6 lg:section">
            <div className="container-x">
              {/* Phones: one white card per module (visual first). Desktop: the original two-column row. */}
              <div className="grid items-stretch gap-5 rounded-[1.5rem] border border-line bg-white p-4 shadow-card sm:p-6 lg:gap-16 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:grid-cols-[1fr_1.1fr] 2xl:gap-24">
                <div className={`order-2 flex flex-col justify-center ${flip ? 'lg:order-2' : 'lg:order-1'}`} data-reveal={flip ? 'right' : 'left'}>
                  <p className="eyebrow">
                    {String(i + 1).padStart(2, '0')} · {b.eyebrow}
                  </p>
                  <h2 id={`${b.id}-title`} className="h2 mt-3 !text-[1.6rem] sm:!text-[2rem] lg:mt-4 lg:!text-[3rem]">
                    {b.title}
                  </h2>
                  <ReadMore lines={4} className="mt-4 lg:mt-0">
                    {b.paragraphs.map((p) => (
                      <p key={p.slice(0, 20)} className="mt-3 leading-relaxed text-ink-muted lg:mt-5">
                        {p}
                      </p>
                    ))}
                  </ReadMore>
                  <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5 lg:mt-7 lg:gap-x-6 lg:gap-y-3">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[0.82rem] leading-snug text-ink lg:gap-2.5 lg:text-sm">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-gold mt-6 w-full lg:hidden">
                    See {b.eyebrow.toLowerCase()} in a free demo <ArrowRight size={17} aria-hidden="true" />
                  </a>
                  <a href="#contact" className="mt-8 hidden items-center gap-2 font-semibold text-gold-dark transition hover:gap-3 lg:inline-flex">
                    See {b.eyebrow.toLowerCase()} in a free demo <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
                <div className={`order-1 flex ${flip ? 'lg:order-1' : 'lg:order-2'}`} data-reveal="zoom" style={{ '--delay': '120ms' }}>
                  <Visual />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
