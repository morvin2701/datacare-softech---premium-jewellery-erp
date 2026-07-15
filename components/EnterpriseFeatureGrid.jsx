import { IconBadge } from './ui/Card';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import { benefits } from '../lib/data/benefits';
import { getIcon } from '../lib/icons';
import { cn } from '../lib/utils';

const complianceChips = ['GST Ready', 'HUID Sync', 'BIS Hallmark', 'e-Invoice'];

/**
 * Bento layout: one wide flagship cell, a supporting column, a middle row,
 * and a full-width horizontal strip — every cell with cursor spotlight.
 */
export default function EnterpriseFeatureGrid() {
  const [flagship, second, third, fourth, fifth, last] = benefits;

  const renderCard = (benefit, index, extra = null, className = '') => {
    const Icon = getIcon(benefit.icon);
    return (
      <SpotlightCard className={cn('group flex h-full flex-col p-7', className)}>
        <div className="flex items-center justify-between">
          <span className="transition-transform duration-500 ease-premium group-hover:-translate-y-1 group-hover:scale-110">
            <IconBadge icon={Icon} />
          </span>
          <span className="font-serif text-3xl italic leading-none text-line transition-colors duration-300 group-hover:text-gold/70">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="mt-6 text-xl font-bold text-ink">{benefit.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {benefit.desc}
        </p>
        {extra}
      </SpotlightCard>
    );
  };

  return (
    <section id="features" className="section-padding bg-ivory">
      <div className="section-container">
        <SectionHeading
          index="01"
          eyebrow="Why Datacare"
          title="Why leading enterprises choose"
          highlight="Datacare"
          description="Our platform is engineered for the specific complexities of the jewellery supply chain — delivering accuracy where generic ERPs fall short."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Flagship — wide cell with compliance chips */}
          <Reveal className="sm:col-span-2">
            {renderCard(
              flagship,
              0,
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {complianceChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-pill border border-gold/25 bg-gold-soft/50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-gold-dark"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.08}>{renderCard(second, 1)}</Reveal>

          <Reveal>{renderCard(third, 2)}</Reveal>
          <Reveal delay={0.08}>{renderCard(fourth, 3)}</Reveal>
          <Reveal delay={0.16}>{renderCard(fifth, 4)}</Reveal>

          {/* Full-width horizontal strip */}
          <Reveal className="sm:col-span-2 lg:col-span-3">
            <SpotlightCard className="group flex h-full flex-col gap-6 p-7 md:flex-row md:items-center">
              <span className="shrink-0 transition-transform duration-500 ease-premium group-hover:-translate-y-1 group-hover:scale-110">
                <IconBadge icon={getIcon(last.icon)} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-ink">{last.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
                  {last.desc}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2 md:justify-end">
                {['Owner', 'Manager', 'Sales', 'Karigar'].map((role, i) => (
                  <span
                    key={role}
                    className={cn(
                      'inline-flex items-center rounded-pill px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wide',
                      i === 0
                        ? 'bg-navy text-gold'
                        : 'border border-line bg-white text-ink-muted'
                    )}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
