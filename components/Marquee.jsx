import { marquee } from '@/lib/content';

export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-3.5" aria-label="DataCare Next modules">
      <ul className="animate-marquee flex w-max items-center gap-8 pr-8 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= marquee.length} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-navy">
            {t}
            <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
              <path fill="currentColor" d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}
