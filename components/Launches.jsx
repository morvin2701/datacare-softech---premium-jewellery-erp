import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, CloudOff, RefreshCw, Sparkles } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import PhoneReel from './PhoneReel';
import { launches } from '@/lib/content';

/* ---------- Visuals: one per launch, all fill the same dark panel ---------- */

const panel = 'dark-surface relative flex min-h-[26rem] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 p-6 shadow-lift sm:p-10';

function OfflineVisual({ screens }) {
  return (
    <div className={`${panel} !py-8`}>
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[90px]" />
      <div className="relative">
        <PhoneReel screens={screens} alt="DataCare Offline Order App" />
      </div>
      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy/80 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
        <CloudOff size={11} className="text-amber-300" aria-hidden="true" /> Works offline
      </span>
      <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-navy">
        <RefreshCw size={11} aria-hidden="true" /> Auto-sync to ERP
      </span>
    </div>
  );
}

function BrowserVisual({ image, url }) {
  return (
    <div className={`${panel} !items-end !p-0 pl-5 pt-8 sm:pl-8 sm:pt-10`} aria-hidden="true">
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
    <div className={`${panel} !bg-[#efe9df] !bg-none !p-0`}>
      <Image src={image.src} alt={image.alt} width={image.w} height={image.h} loading="lazy" sizes="(max-width: 1024px) 90vw, 640px" className="max-h-[34rem] w-full object-contain" />
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
              l.screens ? <OfflineVisual screens={l.screens} /> : l.image?.photo ? <PhotoVisual image={l.image} /> : <BrowserVisual image={l.image} url={l.link?.href.replace(/^https?:\/\/|\/$/g, '')} />;
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
