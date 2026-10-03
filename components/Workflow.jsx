import { ArrowRight, RefreshCw } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { workflow } from '@/lib/content';

function Step({ s, n }) {
  return (
    <li className="group relative flex h-full flex-col items-center rounded-2xl border border-white/10 bg-navy-light/90 px-4 pb-5 pt-5 text-center transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.07]" style={{ direction: 'ltr' }}>
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-navy text-gold-light shadow-[0_0_0_6px_#0A1120] transition duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy">
        <Icon name={s.icon} size={22} />
      </div>
      <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold/80">Step {String(n).padStart(2, '0')}</p>
      <h3 className="mt-1 font-display text-lg leading-tight text-white xl:text-xl">{s.title}</h3>
      <p className="mt-2 text-[0.8rem] leading-relaxed text-white/60">{s.text}</p>
    </li>
  );
}

export default function Workflow() {
  const row1 = workflow.slice(0, 6);
  const row2 = workflow.slice(6);

  return (
    <section id="workflow" className="dark-surface section relative overflow-hidden text-white">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="The complete jewellery cycle"
          title={
            <>
              From Purchase to Year-End — <em className="gold-text">every step</em> in one software
            </>
          }
          intro="Ask any vendor to show you the full cycle in a demo. DataCare Next handles all twelve steps in one system, so stock, karigar, GST and accounts never need to be matched by hand."
        />

        {/* Serpentine loop: row 1 flows → , drops on the right, row 2 flows ← , then loops back up to step 1 */}
        <div className="relative mt-16" data-reveal>
          {/* Row connectors (desktop) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
            <span className="absolute left-[8.33%] right-[8.33%] top-7 h-px bg-gradient-to-r from-gold/30 via-gold/70 to-gold/30" />
            <span className="absolute left-[8.33%] right-[8.33%] h-px bg-gradient-to-l from-gold/30 via-gold/70 to-gold/30" style={{ top: 'calc(50% + 3.5rem)' }} />
            {/* down on the right: step 06 → 07 */}
            <span className="absolute right-[8.33%] top-7 w-px bg-gradient-to-b from-gold/70 to-gold/70" style={{ height: 'calc(50% + 1.75rem)' }} />
            {/* back up on the left: step 12 → 01 (next year) */}
            <span className="absolute left-[8.33%] top-7 w-px border-l border-dashed border-gold/50" style={{ height: 'calc(50% + 1.75rem)' }} />
            <span className="absolute left-[8.33%] top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-gold/40 bg-navy px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-light">
              <RefreshCw size={11} className="animate-spin-slow" /> Repeats every year
            </span>
          </div>

          <ol className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-14">
            {row1.map((s, i) => (
              <Step key={s.title} s={s} n={i + 1} />
            ))}
          </ol>
          <ol className="mt-6 grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-6 lg:[direction:rtl]">
            {row2.map((s, i) => (
              <Step key={s.title} s={s} n={i + 7} />
            ))}
          </ol>
        </div>

        <div className="mt-14 text-center" data-reveal>
          <a href="#contact" className="btn-gold !min-h-[3.2rem] px-8">
            See this full cycle live in a free demo <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
