'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Wand2, Check } from 'lucide-react';

const steps = [
  { label: 'Analysed reference image', meta: '0.4s' },
  { label: 'Matched 12 inventory SKUs', meta: '1.1s' },
  { label: 'Rendered 4 catalog variations', meta: '6.2s' },
  { label: 'Optimised for web & print', meta: '0.8s' },
];

const tags = ['Studio light', 'Ivory backdrop', '4K', 'Hi-detail'];

export default function AIImageShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold/10 opacity-70 blur-3xl"
      />

      {/* Gold gradient hairline border */}
      <div className="rounded-[1.65rem] bg-gradient-to-br from-gold/45 via-navy-line/70 to-navy-line p-px shadow-card-hover">
        <div className="overflow-hidden rounded-[1.6rem] bg-navy-light/90 backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-navy-line/80 px-5 py-3.5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-gold">
              <Sparkles size={14} /> AI Catalog Studio
            </span>
            <span className="inline-flex items-center gap-2 rounded-pill border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Live
            </span>
          </div>

          {/* Body */}
          <div className="grid items-stretch gap-5 p-5 sm:grid-cols-[1fr_1.05fr]">
            {/* Main generated image */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-navy-line ring-1 ring-black/20 sm:aspect-auto sm:min-h-[23rem]">
              <Image
                src="/inputImage.jpeg"
                alt="AI-generated jewellery product visualisation"
                fill
                sizes="(max-width: 1024px) 50vw, 24vw"
                className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/10" />
              {!reduceMotion && (
                <motion.div
                  className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-gold/0 via-gold/25 to-gold/0"
                  initial={{ y: '-40%' }}
                  animate={{ y: '320%' }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                />
              )}
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-gold px-2.5 py-1 text-[0.65rem] font-bold text-navy shadow-gold">
                  <Wand2 size={11} /> AI Generated
                </span>
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <span className="font-serif text-sm italic text-white/85">
                  Diamond necklace · v4
                </span>
                <span className="rounded-pill bg-navy/70 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-white/70 backdrop-blur">
                  4K
                </span>
              </div>
            </div>

            {/* Text content panel */}
            <div className="flex flex-col">
              <p className="text-[0.65rem] font-semibold uppercase tracking-brand text-white/45">
                Prompt
              </p>
              <p className="mt-2 text-[0.95rem] leading-snug text-white/90">
                Elegant diamond necklace, soft studio lighting, ivory backdrop
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-pill border border-navy-line bg-navy/40 px-2.5 py-1 text-[0.65rem] font-medium text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-3 mt-6 text-[0.65rem] font-semibold uppercase tracking-brand text-white/45">
                Generation
              </p>
              <ul className="space-y-3">
                {steps.map((step, i) => (
                  <motion.li
                    key={step.label}
                    initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[0.85rem] text-white/80">
                        {step.label}
                      </span>
                    </span>
                    <span className="font-serif text-xs italic text-white/40">
                      {step.meta}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Completion footer */}
              <div className="mt-auto flex items-center justify-between border-t border-navy-line/80 pt-4">
                <span className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-emerald-300">
                  <Check size={14} strokeWidth={3} /> Completed
                </span>
                <span className="font-serif text-sm italic text-gold">
                  8.5s total
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating capability chip */}
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-3 -top-4 hidden rounded-2xl border border-navy-line bg-navy-light px-4 py-2.5 shadow-card sm:block"
      >
        <p className="font-serif text-base font-semibold text-gold">4 variations</p>
        <p className="text-[11px] text-white/55">in seconds</p>
      </motion.div>
    </div>
  );
}
