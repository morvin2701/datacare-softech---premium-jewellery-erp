import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, CloudOff, RefreshCw, Sparkles } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { launches } from '@/lib/content';

/* ---------- Visuals: one per launch, all fill the same dark panel ---------- */

const panel = 'dark-surface relative flex min-h-[26rem] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 p-6 shadow-lift sm:p-10';

function OfflineVisual() {
  const orders = [
    ['Bangle · 22K · 17.900 g', 'Adv ₹ 25,000'],
    ['Necklace set · 916 · 42.300 g', 'Adv ₹ 60,000'],
    ['Ring · 4.250 g · Diamond', 'Adv ₹ 10,000'],
  ];
  return (
    <div className={panel} aria-hidden="true">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[90px]" />
      {/* Phone */}
      <div className="relative w-[15.5rem] rounded-[2.2rem] border-[6px] border-navy-muted bg-white p-4 pb-6 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)] sm:w-[17rem]">
        <span className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-navy-muted" />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">DataCare orders</p>
            <p className="font-display text-base font-semibold">Exhibition · Day 2</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[0.6rem] font-bold text-amber-700 ring-1 ring-amber-200">
            <CloudOff size={11} /> Offline
          </span>
        </div>
        <ul className="mt-3 space-y-2">
          {orders.map(([a, b], i) => (
            <li key={a} className="flex items-center gap-2.5 rounded-xl border border-line bg-ivory px-2.5 py-2" style={{ animation: `hero-in 0.5s var(--ease) ${i * 0.35}s both` }}>
              <span className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-gold-light to-gold-dark" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[0.7rem] font-semibold">{a}</span>
                <span className="block text-[0.62rem] text-ink-faint">{b} · due 12 Oct</span>
              </span>
              <Check size={13} strokeWidth={3} className="shrink-0 text-emerald-600" />
            </li>
          ))}
        </ul>
        <span className="mt-3 block w-full rounded-xl bg-navy py-2.5 text-center text-[0.7rem] font-semibold text-white">+ New order</span>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-[0.6rem] text-ink-faint">
          <RefreshCw size={10} className="animate-spin-slow" /> 3 orders waiting · syncs when online
        </p>
      </div>
      {/* Sync path to the ERP */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 text-center sm:flex lg:right-10">
        <span className="rounded-xl border border-white/15 bg-navy px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-wider text-white/80">DataCare Next</span>
        <span className="h-16 w-px border-l border-dashed border-gold/60" />
        <span className="rounded-full bg-gold px-2.5 py-1 text-[0.6rem] font-bold text-navy">Auto-sync</span>
      </div>
    </div>
  );
}

function BrowserVisual({ image, url }) {
  return (
    <div className={`${panel} !items-end !p-0 pl-6 pt-10 sm:pl-10 sm:pt-14`} aria-hidden="true">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative w-full overflow-hidden rounded-tl-2xl border-l border-t border-white/20 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-ivory px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[0.7rem] text-ink-faint ring-1 ring-line">🔒 {url}</span>
        </div>
        <Image src={image.src} alt="" width={image.w} height={image.h} loading="lazy" sizes="(max-width: 1024px) 90vw, 640px" className="w-full" />
      </div>
    </div>
  );
}

function PhotoVisual({ image }) {
  return (
    <div className={`${panel} max-h-[32rem] !p-0`}>
      <Image src={image.src} alt={image.alt} width={image.w} height={image.h} loading="lazy" sizes="(max-width: 1024px) 90vw, 640px" className="h-full max-h-[32rem] w-full object-cover object-center" />
    </div>
  );
}

/* --------------------------------- Section -------------------------------- */

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

        <div className="mt-6 divide-y divide-line/80">
          {launches.map((l, i) => {
            const flip = i % 2 === 1;
            const visual =
              i === 0 ? <OfflineVisual /> : l.image?.photo ? <PhotoVisual image={l.image} /> : <BrowserVisual image={l.image} url={l.link?.href.replace(/^https?:\/\/|\/$/g, '')} />;
            return (
              <article key={l.title} id={l.id} className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
                <div className={flip ? 'lg:order-2' : ''} data-reveal={flip ? 'right' : 'left'}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-navy shadow-gold">
                      <Sparkles size={11} aria-hidden="true" /> {l.badge}
                    </span>
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                      Launch {String(i + 1).padStart(2, '0')} of {launches.length}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="icon-chip !h-12 !w-12">
                      <Icon name={l.icon} size={22} />
                    </span>
                    <h3 className="font-display text-[2rem] font-medium leading-tight text-ink sm:text-[2.4rem]">{l.title}</h3>
                  </div>
                  <p className="mt-4 text-lg font-medium text-ink">{l.tagline}</p>
                  <p className="mt-3 leading-relaxed text-ink-muted">{l.text}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {l.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a href="#contact" className="btn-gold">
                      {l.cta} <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    {l.link ? (
                      <a href={l.link.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        {l.link.label} <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className={`flex ${flip ? 'lg:order-1' : ''}`} data-reveal="zoom" style={{ '--delay': '120ms' }}>
                  {visual}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
