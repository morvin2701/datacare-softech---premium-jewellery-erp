'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, X } from 'lucide-react';
import { desktopShots, mobileShots } from '@/lib/gallery';

function Reel({ items, kind, reverse, onOpen }) {
  const loop = [...items, ...items];
  const desktop = kind === 'desktop';
  return (
    <div className="reel group relative overflow-hidden py-4">
      <ul
        className={`reel-track flex w-max gap-5 pr-5 group-hover:[animation-play-state:paused] ${reverse ? 'reel-reverse' : ''}`}
        style={{ '--reel-duration': `${items.length * (desktop ? 6 : 4.5)}s` }}
      >
        {loop.map((s, i) => {
          const clone = i >= items.length;
          return (
            <li key={i} aria-hidden={clone || undefined}>
              <button
                type="button"
                tabIndex={clone ? -1 : 0}
                onClick={() => onOpen(kind, i % items.length)}
                className={`block overflow-hidden border border-line bg-white p-1.5 shadow-card transition duration-500 ease-premium hover:-translate-y-2 hover:border-gold/60 hover:shadow-lift ${
                  desktop ? 'w-[17rem] rounded-2xl sm:w-[21rem]' : 'w-[9.5rem] rounded-[1.6rem] sm:w-[11rem]'
                }`}
                aria-label={`Open ${s.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.thumb}
                  alt={clone ? '' : s.alt}
                  width={desktop ? 560 : 300}
                  height={desktop ? 298 : 650}
                  loading="lazy"
                  decoding="async"
                  className={`w-full ${desktop ? 'aspect-[560/298] rounded-xl' : 'aspect-[300/650] rounded-[1.25rem]'} object-cover`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Label({ icon: I, children }) {
  return (
    <div className="container-x flex items-center gap-4" data-reveal>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-line" />
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-card">
        <I size={15} className="text-gold-dark" aria-hidden="true" /> {children}
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-line" />
    </div>
  );
}

export default function Screenshots() {
  const [view, setView] = useState(null); // { kind, index }
  const dlg = useRef(null);
  const touch = useRef(0);

  const list = view?.kind === 'mobile' ? mobileShots : desktopShots;
  const open = useCallback((kind, index) => setView({ kind, index }), []);
  const step = useCallback(
    (d) => setView((v) => v && { ...v, index: (v.index + d + list.length) % list.length }),
    [list.length]
  );

  useEffect(() => {
    const el = dlg.current;
    if (!el) return;
    if (view && !el.open) el.showModal();
    if (!view && el.open) el.close();
  }, [view]);

  useEffect(() => {
    if (!view) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [view, step]);

  const shot = view ? list[view.index] : null;
  const isMobile = view?.kind === 'mobile';

  return (
    <section id="screenshots" className="section relative overflow-hidden">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">Screenshots</p>
          <h2 className="h2 mt-4">
            See DataCare Next <em className="gold-text">in action</em>
          </h2>
          <p className="lead mt-5">
            A living reel of the real product — {desktopShots.length} desktop ERP screens and the mobile apps. Tap any frame to
            explore the full gallery.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Label icon={Monitor}>Desktop ERP</Label>
        <Reel items={desktopShots} kind="desktop" onOpen={open} />
      </div>
      <div className="mt-8">
        <Label icon={Smartphone}>Mobile Apps</Label>
        <Reel items={mobileShots} kind="mobile" reverse onOpen={open} />
      </div>

      <dialog
        ref={dlg}
        onClose={() => setView(null)}
        onClick={(e) => e.target === dlg.current && setView(null)}
        aria-label="Product screenshot gallery"
        className="gallery-dialog m-auto h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-navy/90 backdrop:backdrop-blur-md"
      >
        {shot ? (
          <div
            className="flex h-full flex-col items-center justify-center gap-4 px-3 py-14 sm:px-20"
            onClick={(e) => e.target === e.currentTarget && setView(null)}
            onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touch.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={shot.full}
              src={shot.full}
              alt={shot.alt}
              width={shot.w}
              height={shot.h}
              className={`gallery-img max-h-[78dvh] w-auto rounded-2xl bg-white object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,.7)] ${
                isMobile ? 'max-w-[min(22rem,90vw)]' : 'max-w-full'
              }`}
            />
            <p className="text-center text-sm text-white/80">
              <span className="font-semibold text-gold-light">{shot.title}</span>
              <span className="text-white/45">
                {' '}
                · {isMobile ? 'Mobile app' : 'Desktop ERP'} · {view.index + 1} / {list.length}
              </span>
            </p>

            <button type="button" onClick={() => setView(null)} aria-label="Close gallery" className="gallery-btn right-4 top-4">
              <X size={20} />
            </button>
            <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot" className="gallery-btn left-3 top-1/2 -translate-y-1/2 sm:left-6">
              <ChevronLeft size={22} />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next screenshot" className="gallery-btn right-3 top-1/2 -translate-y-1/2 sm:right-6">
              <ChevronRight size={22} />
            </button>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
