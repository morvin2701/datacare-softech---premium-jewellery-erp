'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

/**
 * Click-to-play video. Shows a poster image until the user opts in; the
 * <video> element (and its download) is only mounted on first play, so nothing
 * is fetched/preloaded on page load.
 */
export default function LazyVideo({
  src,
  poster,
  posterAlt = 'Video preview',
  className = '',
  aspect = 'aspect-[9/16]',
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-navy-line bg-navy ${className}`}
    >
      {active ? (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label="Play video preview"
        >
          <Image
            src={poster}
            alt={posterAlt}
            fill
            sizes="(max-width: 1024px) 80vw, 40vw"
            className="object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-navy/40 transition-colors duration-300 group-hover:bg-navy/30" />
          <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy shadow-gold-lg transition-transform duration-300 ease-premium group-hover:scale-110">
            <Play size={26} className="ml-1 fill-navy" />
          </span>
        </button>
      )}
    </div>
  );
}
