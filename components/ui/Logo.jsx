import { cn } from '../../lib/utils';

/**
 * Refined brand mark: a faceted monogram "D" with a gem-cut detail, paired with
 * a confident wordmark and a single gold accent. Replaces the generic
 * 4-colour pinwheel.
 */
export function LogoMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Datacare Softech"
      className={cn('h-10 w-10', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dcsGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8D5A3" />
          <stop offset="45%" stopColor="#C8A24A" />
          <stop offset="100%" stopColor="#A8863A" />
        </linearGradient>
      </defs>

      {/* Navy tile */}
      <rect x="1" y="1" width="46" height="46" rx="13" fill="#0B1220" />
      <rect
        x="1.75"
        y="1.75"
        width="44.5"
        height="44.5"
        rx="12.25"
        fill="none"
        stroke="url(#dcsGold)"
        strokeWidth="1.5"
        opacity="0.55"
      />

      {/* Monogram D stem */}
      <rect x="13" y="13" width="4.4" height="22" rx="1.6" fill="url(#dcsGold)" />

      {/* Faceted bowl of the D rendered as a gem cut */}
      <path
        d="M18.6 13 H26.5 C32.6 13 36.6 17.6 36.6 24 C36.6 30.4 32.6 35 26.5 35 H18.6 Z"
        fill="none"
        stroke="url(#dcsGold)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Facet lines */}
      <path
        d="M18.6 24 L36.6 24 M22 13.6 L30 24 L22 34.4"
        stroke="url(#dcsGold)"
        strokeWidth="1.1"
        opacity="0.65"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Gem accent */}
      <path
        d="M30.7 7.4 L33.1 9.6 L30.7 11.8 L28.3 9.6 Z"
        fill="url(#dcsGold)"
      />
    </svg>
  );
}

export default function Logo({ className = '', dark = false, showWordmark = true }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark className="h-10 w-10" />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-lg font-bold tracking-tight',
              dark ? 'text-white' : 'text-ink'
            )}
          >
            Datacare<span className="text-gold">.</span>
            <span className={dark ? 'text-white/70' : 'text-ink-muted'}>
              Softech
            </span>
          </span>
          <span
            className={cn(
              'mt-1 text-[0.55rem] font-semibold uppercase tracking-brand',
              dark ? 'text-white/40' : 'text-ink-faint'
            )}
          >
            Premium Jewellery ERP
          </span>
        </span>
      ) : null}
    </span>
  );
}
