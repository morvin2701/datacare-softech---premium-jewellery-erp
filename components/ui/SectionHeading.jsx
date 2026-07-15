import { cn } from '../../lib/utils';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

/**
 * Editorial section header: optional index numeral + eyebrow, an oversized
 * display title with a serif-italic gold highlight, and supporting copy.
 * The title reveals word-by-word; eyebrow and description fade in around it.
 * Works on both ivory and navy backgrounds and cascades site-wide.
 */
export default function SectionHeading({
  eyebrow,
  index,
  title,
  highlight,
  description,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignment =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left';

  return (
    <div className={cn('flex max-w-3xl flex-col gap-5', alignment, className)}>
      {eyebrow || index ? (
        <Reveal
          as="span"
          y={14}
          className={cn(
            'flex items-center gap-3',
            align === 'center' && 'justify-center'
          )}
        >
          {index ? (
            <span
              className={cn(
                'font-serif text-sm italic',
                dark ? 'text-gold/70' : 'text-gold-dark'
              )}
            >
              ({index})
            </span>
          ) : null}
          {eyebrow ? (
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              {eyebrow}
            </span>
          ) : null}
        </Reveal>
      ) : null}

      <h2
        className={cn(
          'overflow-visible py-1 font-display text-[2rem] font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[3.25rem]',
          dark ? 'text-white' : 'text-ink'
        )}
      >
        <TextReveal
          delay={0.1}
          segments={[
            { text: title, className: '' },
            ...(highlight
              ? [
                  {
                    text: highlight,
                    className: 'text-shimmer-gold font-serif font-medium italic',
                  },
                ]
              : []),
          ]}
        />
      </h2>

      {description ? (
        <Reveal as="p" y={16} delay={0.25}>
          <span
            className={cn(
              'block max-w-2xl text-base leading-relaxed sm:text-lg',
              dark ? 'text-white/65' : 'text-ink-muted'
            )}
          >
            {description}
          </span>
        </Reveal>
      ) : null}
    </div>
  );
}
