'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, CloudOff, FileText, MessageCircle, RefreshCw, Send, Sparkles } from 'lucide-react';
import Icon from './Icon';
import PhoneReel from './PhoneReel';
import { launches } from '@/lib/content';

/* ---------- Visuals: one per launch, all fill the same dark panel ---------- */

const panel = 'dark-surface relative flex min-h-[26rem] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 p-6 shadow-lift sm:p-10';

function OfflineVisual({ screens }) {
  return (
    <div className={`${panel} flex-col !py-8`}>
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[90px]" />
      <div className="relative">
        <PhoneReel screens={screens} alt="DataCare Offline Order App" />
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy/80 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-white/80 backdrop-blur sm:absolute sm:left-5 sm:top-5 sm:mt-0">
        <CloudOff size={11} className="text-amber-300" aria-hidden="true" /> Works offline
      </span>
      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-navy sm:absolute sm:right-5 sm:top-5 sm:mt-0">
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

// WhatsApp chat as the customer sees it. Drawn in CSS; swap for a real
// image by adding `image` to the launch in lib/content.js.
function WhatsAppVisual() {
  const msgs = [
    { kind: 'pdf', text: 'Thank you for shopping with Shree Jewellers! Your tax invoice is attached.', file: 'Invoice-1043.pdf · 2 pages', time: '6:42 pm' },
    { kind: 'offer', text: '✨ Diwali Collection is here — 20% off making charges till 2 Nov. Visit the showroom!', time: '10:00 am' },
    { kind: 'text', text: 'Today’s rate · Gold 22K ₹ 9,250/g · Silver ₹ 112/g', time: '10:02 am' },
    { kind: 'text', text: 'Reminder: ₹ 43,000 is pending on bill #1021. Pay securely via the UPI link below.', time: '11:15 am' },
    { kind: 'reply', text: 'Paid ✅ Thank you', time: '11:31 am' },
  ];
  const Ticks = () => (
    <svg viewBox="0 0 16 11" width="13" height="9" className="ml-1 inline-block align-middle text-[#53bdeb]" aria-hidden="true">
      <path fill="currentColor" d="M11.07.65 5.6 7.4 3.6 5.3a.6.6 0 0 0-.86.84l2.5 2.6a.6.6 0 0 0 .9-.04l5.9-7.2a.6.6 0 1 0-.93-.76Zm3.9 0-5.47 6.75-.5-.52-.76.93.83.87a.6.6 0 0 0 .9-.04l5.9-7.2a.6.6 0 1 0-.93-.76Z" />
    </svg>
  );
  return (
    <div className={`${panel} flex-col !py-8`} aria-hidden="true">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366]/15 blur-[90px]" />
      {/* Phone */}
      <div className="relative w-[15.5rem] overflow-hidden rounded-[2.2rem] border-[6px] border-navy-muted bg-[#e5ddd5] shadow-[0_40px_80px_-30px_rgba(0,0,0,.85)] sm:w-[16.5rem]">
        <div className="flex items-center gap-2.5 bg-[#075e54] px-3 py-2.5 text-white">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-[0.6rem] font-bold text-navy">SJ</span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="flex items-center gap-1 text-[0.78rem] font-semibold">
              Shree Jewellers <BadgeCheck size={12} className="fill-[#25D366] text-[#075e54]" />
            </span>
            <span className="block text-[0.6rem] text-white/75">Business account · online</span>
          </span>
        </div>
        <div className="space-y-2 px-2.5 py-3" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,.035) 1px, transparent 1px)', backgroundSize: '12px 12px' }}>
          {msgs.map((m, i) => (
            <div
              key={m.text}
              className={`max-w-[88%] rounded-xl px-2.5 py-1.5 text-[0.64rem] leading-snug text-ink shadow-sm ${m.kind === 'reply' ? 'ml-auto rounded-tr-sm bg-[#dcf8c6]' : 'rounded-tl-sm bg-white'}`}
              style={{ animation: `hero-in 0.5s var(--ease) ${i * 0.35}s both` }}
            >
              {m.kind === 'pdf' ? (
                <div className="mb-1.5 flex items-center gap-2 rounded-lg bg-ivory p-1.5 ring-1 ring-line">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-red-500 text-white"><FileText size={14} /></span>
                  <span className="min-w-0 leading-tight">
                    <span className="block truncate text-[0.62rem] font-semibold">{m.file}</span>
                    <span className="block text-[0.55rem] text-ink-faint">PDF · 86 KB</span>
                  </span>
                </div>
              ) : null}
              {m.kind === 'offer' ? (
                <div className="mb-1.5 flex h-16 items-end rounded-lg bg-gradient-to-br from-navy via-navy-muted to-gold-dark p-1.5">
                  <span className="rounded bg-gold px-1.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-navy">New collection</span>
                </div>
              ) : null}
              {m.text}
              <span className="float-right ml-2 mt-1 text-[0.52rem] text-ink-faint">
                {m.time}
                {m.kind !== 'reply' ? <Ticks /> : null}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-[#f0f0f0] px-2.5 py-2">
          <span className="flex-1 rounded-full bg-white px-3 py-1.5 text-[0.6rem] text-ink-faint">Type a message</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075e54] text-white"><Send size={12} /></span>
        </div>
      </div>
      {/* Panel badges: corners on wide screens, a row under the phone on phones */}
      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy/80 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-white/80 backdrop-blur sm:absolute sm:left-5 sm:top-5 sm:mt-0">
        <MessageCircle size={11} className="text-[#25D366]" /> Official Meta API
      </span>
      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-navy sm:absolute sm:right-5 sm:top-5 sm:mt-0">
        <Send size={11} /> Auto-send on every bill
      </span>
      {/* Campaign stat card */}
      <div className="absolute bottom-6 right-6 hidden rounded-xl border border-white/15 bg-navy/85 p-3 text-white backdrop-blur xl:block">
        <p className="text-[0.58rem] font-semibold uppercase tracking-wider text-white/50">Diwali broadcast</p>
        <p className="mt-0.5 text-sm font-semibold">2,400 sent</p>
        <div className="mt-1.5 h-1.5 w-28 rounded-full bg-white/10"><span className="block h-full w-[83%] rounded-full bg-[#25D366]" /></div>
        <p className="mt-1 text-[0.58rem] text-white/60">1,980 read · 412 replied</p>
      </div>
    </div>
  );
}

function visualFor(l) {
  if (l.screens) return <OfflineVisual screens={l.screens} />;
  if (l.image?.photo) return <PhotoVisual image={l.image} />;
  if (l.image) return <BrowserVisual image={l.image} url={l.link?.href.replace(/^https?:\/\/|\/$/g, '')} />;
  if (l.id === 'whatsapp-api') return <WhatsAppVisual />;
  return null;
}

/* ------------------------------ The list ------------------------------ */

// Server HTML lists launches in file order (good for search engines); after
// the page loads the order is shuffled so no launch is always first.
export default function LaunchList() {
  const [order, setOrder] = useState(() => launches.map((_, i) => i));

  useEffect(() => {
    const a = launches.map((_, i) => i);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setOrder(a);
  }, []);

  return (
    <div className="mt-6 divide-y divide-line/80">
      {order.map((idx, pos) => {
        const l = launches[idx];
        const flip = pos % 2 === 1;
        return (
          <article key={l.id} id={l.id} className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
            <div className={flip ? 'lg:order-2' : ''} data-reveal={flip ? 'right' : 'left'}>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-navy shadow-gold">
                  <Sparkles size={11} aria-hidden="true" /> {l.badge}
                </span>
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  Launch {String(pos + 1).padStart(2, '0')} of {launches.length}
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
              {visualFor(l)}
            </div>
          </article>
        );
      })}
    </div>
  );
}
