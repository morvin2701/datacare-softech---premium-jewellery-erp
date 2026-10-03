'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Rotate3d, Wand2, Sun, Sparkles } from 'lucide-react';
import LazyVideo from './ui/LazyVideo';

const features = [
  { icon: Rotate3d, label: '360° motion' },
  { icon: Sun, label: 'Studio lighting' },
  { icon: Sparkles, label: 'Reflections' },
];

export default function AIVideoShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-gold/10 opacity-70 blur-3xl"
      />

      {/* Gold gradient hairline frame */}
      <div className="rounded-[1.9rem] bg-gradient-to-br from-gold/50 via-navy-line/70 to-navy-line p-px shadow-card-hover">
        {/* Cinematic stage — fills the column, no empty sides */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem] bg-navy sm:aspect-[16/14]">
          {/* Softly-blurred backdrop derived from the product itself */}
          <Image
            src="/inputImage.jpeg"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="scale-125 object-cover opacity-30 blur-2xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(200,162,74,0.18),transparent_62%)]" />
          <div className="absolute inset-0 bg-navy/45" />

          {/* Header row */}
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-gold">
              <Wand2 size={14} /> AI Video Studio
            </span>
            <span className="inline-flex items-center gap-2 rounded-pill border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-300 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Rendered
            </span>
          </div>

          {/* Centered portrait video */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 py-14">
            <div className="relative h-full aspect-[9/16] max-w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <LazyVideo
                src="/OutputVideo.mp4"
                poster="/inputImage.jpeg"
                posterAlt="AI-generated jewellery showcase video"
                aspect="h-full"
                className="!rounded-2xl !border-0"
              />
              {/* AI badge */}
              <div className="pointer-events-none absolute left-3 top-3 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-gold px-2.5 py-1 text-[0.62rem] font-bold text-navy shadow-gold">
                  <Wand2 size={10} /> AI Generated
                </span>
              </div>
              {/* Caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-navy/85 via-navy/20 to-transparent p-3.5">
                <span className="font-serif text-sm italic text-white/90">
                  Diamond necklace
                </span>
                <span className="rounded-pill bg-navy/70 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide text-white/75 backdrop-blur">
                  4K · 12s
                </span>
              </div>
            </div>
          </div>

          {/* Feature chips fill the bottom band */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-center justify-center gap-2 px-5 py-4">
            {features.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-pill border border-white/10 bg-navy/60 px-3 py-1.5 text-[0.68rem] font-medium text-white/75 backdrop-blur"
              >
                <Icon size={12} className="text-gold" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating capability chip */}
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-4 -top-5 z-30 hidden items-center gap-2.5 rounded-2xl border border-navy-line bg-navy-light px-4 py-2.5 shadow-card-hover sm:flex"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
          <Rotate3d size={17} />
        </span>
        <div className="leading-tight">
          <p className="text-[0.82rem] font-bold text-white">Single photo → film</p>
          <p className="text-[11px] text-white/55">in ~14 seconds</p>
        </div>
      </motion.div>
    </div>
  );
}
