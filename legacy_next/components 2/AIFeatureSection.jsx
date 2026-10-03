import { Check } from 'lucide-react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { cn } from '../lib/utils';

/**
 * Reusable premium (navy + gold) feature section used for both the AI Image
 * and AI Video sections. Layout can be reversed; media is supplied as children
 * so each variant can render an image showcase or a lazy video.
 */
export default function AIFeatureSection({
  id,
  eyebrow,
  title,
  highlight,
  description,
  bullets = [],
  primaryCta,
  secondaryCta,
  reverse = false,
  children,
}) {
  return (
    <section id={id} className="ambient-navy section-padding text-white">
      <div className="section-container grid items-center gap-14 lg:grid-cols-2">
        <Reveal className={cn('flex flex-col items-start', reverse && 'lg:order-2')}>
          {eyebrow ? (
            <span className="eyebrow rounded-pill border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">
              {eyebrow}
            </span>
          ) : null}

          <h2 className="mt-6 overflow-visible py-1 font-display text-[2rem] font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[3rem]">
            {title}{' '}
            {highlight ? (
              <span className="text-shimmer-gold font-serif font-medium italic">
                {highlight}
              </span>
            ) : null}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>

          {bullets.length ? (
            <ul className="mt-8 grid gap-3.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/80 sm:text-base">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}

          {primaryCta || secondaryCta ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCta ? (
                <Button
                  as="a"
                  href={primaryCta.href}
                  variant="primary"
                  target={primaryCta.external ? '_blank' : undefined}
                  rel={primaryCta.external ? 'noopener noreferrer' : undefined}
                >
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button as="a" href={secondaryCta.href} variant="secondaryDark">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.1} className={cn('relative', reverse && 'lg:order-1')}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
