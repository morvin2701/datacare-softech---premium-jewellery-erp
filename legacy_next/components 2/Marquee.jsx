'use client';

import { Gem } from 'lucide-react';

const ITEMS = [
  'Inventory Control',
  'GST & Hallmarking',
  'AI Catalog Studio',
  'Multi-Store Sync',
  'POS & Billing',
  'Gold Schemes',
  'Karigar Management',
  'Realtime Analytics',
];

function Track({ ariaHidden = false }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 px-5"
    >
      {ITEMS.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-10">
          <span className="font-serif text-2xl italic text-ink/80 sm:text-3xl">
            {item}
          </span>
          <Gem
            size={16}
            className="shrink-0 text-gold"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Trionn-style infinite keyword marquee band. Two identical tracks translate
 * -50% in tandem for a seamless loop. Edge-faded, pauses on hover.
 */
export default function Marquee() {
  return (
    <section
      aria-label="Platform capabilities"
      className="relative overflow-hidden border-y border-line bg-ivory-deep/60 py-6"
    >
      <div
        className="group flex w-max animate-marquee items-center [animation-play-state:running] hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        <Track />
        <Track ariaHidden />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ivory to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ivory to-transparent" />
    </section>
  );
}
