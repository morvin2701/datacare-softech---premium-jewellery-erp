import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { launches } from '@/lib/content';

/* Small animated illustrations, CSS/SVG only. */

function OfflineVisual() {
  const rows = ['Bangle · 22K · 17.900 g', 'Necklace set · 916', 'Ring · 4.250 g · Dia'];
  return (
    <div className="relative mx-auto flex h-56 w-full items-end justify-center overflow-hidden" aria-hidden="true">
      <div className="relative w-[9.5rem] translate-y-3 rounded-[1.6rem] border-[5px] border-navy-muted bg-navy p-3 pb-6 shadow-lift">
        <div className="flex items-center justify-between text-[0.55rem] text-white/60">
          <span>Orders</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-1.5 py-0.5 font-semibold text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" style={{ animation: 'ping-soft 2s ease-out infinite' }} /> Offline
          </span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {rows.map((r, i) => (
            <li key={r} className="flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-2 py-1.5 text-[0.55rem] text-white/85" style={{ animation: `hero-in 0.5s var(--ease) ${i * 0.5}s both` }}>
              <span className="h-4 w-4 shrink-0 rounded bg-gold/30" /> {r}
            </li>
          ))}
        </ul>
        <div className="mt-2 rounded-lg bg-gold px-2 py-1 text-center text-[0.55rem] font-bold text-navy">3 orders · syncs when online</div>
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="relative mx-auto flex h-56 w-full items-end overflow-hidden" aria-hidden="true">
      <div className="w-full rounded-t-xl border border-white/10 bg-navy shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/10 px-2 py-0.5 text-[0.55rem] text-white/60">🔒 datacareweb.com</span>
        </div>
        <div className="grid grid-cols-[4.5rem_1fr] gap-2 p-3">
          <ul className="space-y-1">
            {['Dashboard', 'Sales', 'Tag Stock', 'Karigar', 'Ledger'].map((t, i) => (
              <li key={t} className={`rounded px-1.5 py-1 text-[0.55rem] ${i === 0 ? 'bg-gold text-navy' : 'text-white/60'}`}>{t}</li>
            ))}
          </ul>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-1.5">
              {[['Cash & bank', '₹ 4.8L'], ['Outstanding', '₹ 2.1L'], ['Branches', '3 live']].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-white/[0.06] p-1.5">
                  <p className="text-[0.45rem] uppercase tracking-wider text-white/45">{k}</p>
                  <p className="text-[0.65rem] font-semibold text-gold-light">{v}</p>
                </div>
              ))}
            </div>
            <div className="flex h-12 items-end gap-1 rounded-lg bg-white/[0.06] p-1.5">
              {[40, 55, 35, 70, 60, 85, 75].map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-gold/70" style={{ height: `${h}%`, animation: `draw 0.8s var(--ease) ${i * 0.08}s both`, transformOrigin: 'bottom' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RfidVisual() {
  const tags = [[30, 35], [70, 28], [78, 65], [38, 72], [55, 50], [20, 58]];
  return (
    <div className="relative mx-auto flex h-56 w-full items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="relative aspect-square h-48">
        {[1, 0.7, 0.4].map((s) => (
          <span key={s} className="absolute inset-0 m-auto rounded-full border border-gold/25" style={{ width: `${s * 100}%`, height: `${s * 100}%` }} />
        ))}
        <span className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, rgba(201,162,75,.5), transparent 25%)', animation: 'radar 3s linear infinite' }} />
        {tags.map(([x, y], i) => (
          <span key={i} className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
            <span className="absolute inset-0 rounded-full bg-gold-light" style={{ animation: `ping-soft 3s ${i * 0.5}s ease-out infinite` }} />
            <span className="absolute inset-0 rounded-full bg-gold" />
          </span>
        ))}
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-[0.5rem] font-bold uppercase tracking-widest text-gold-light ring-2 ring-gold/50">RFID</span>
      </div>
      <div className="absolute bottom-2 right-2 rounded-lg bg-navy px-2.5 py-1.5 text-[0.6rem] text-white/80 ring-1 ring-gold/30">
        <span className="font-semibold text-gold-light">1,248</span> / 1,250 counted
      </div>
    </div>
  );
}

const visuals = [OfflineVisual, WebVisual, RfidVisual];

export default function Launches() {
  return (
    <section id="launches" className="section relative bg-ivory-deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="New launches"
          title={
            <>
              What’s new in <em className="gold-text">DataCare Next</em>
            </>
          }
          intro="Three additions built from what jewellers asked for this year — orders without internet, the ERP in your browser, and a complete RFID kit for stock counting."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {launches.map((l, i) => {
            const Visual = visuals[i];
            return (
              <article key={l.title} className="card spot group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${i * 100}ms` }}>
                <div className="dark-surface relative border-b border-white/10 p-5">
                  <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-navy shadow-gold">
                    <Sparkles size={11} aria-hidden="true" /> {l.badge}
                  </span>
                  {l.image ? (
                    <div className="relative flex h-56 w-full items-end overflow-hidden">
                      <div className="w-full overflow-hidden rounded-t-xl border border-white/15 bg-white shadow-lift transition duration-700 ease-premium group-hover:-translate-y-1">
                        <div className="flex items-center gap-1.5 border-b border-line bg-ivory px-3 py-1.5" aria-hidden="true">
                          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                          <span className="ml-2 truncate rounded bg-white px-2 py-0.5 text-[0.55rem] text-ink-faint">🔒 {l.link?.href.replace(/^https?:\/\/|\/$/g, '')}</span>
                        </div>
                        <Image src={l.image.src} alt={l.image.alt} width={l.image.w} height={l.image.h} loading="lazy" sizes="(max-width: 1024px) 90vw, 440px" className="w-full" />
                      </div>
                    </div>
                  ) : (
                    <Visual />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="icon-chip">
                      <Icon name={l.icon} />
                    </span>
                    <h3 className="font-display text-2xl font-medium leading-tight text-ink">{l.title}</h3>
                  </div>
                  <p className="mt-3 text-[1.02rem] font-medium text-ink">{l.tagline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{l.text}</p>
                  <ul className="mt-5 space-y-2">
                    {l.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-gold text-navy" style={{ width: 18, height: 18 }}>
                          <Check size={11} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                    <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-gold-dark transition hover:gap-3">
                      {l.cta} <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    {l.link ? (
                      <a href={l.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition hover:text-ink">
                        {l.link.label} <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
