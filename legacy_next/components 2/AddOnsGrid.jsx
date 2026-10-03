import { Check, TrendingUp } from 'lucide-react';
import Card, { IconBadge } from './ui/Card';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { addOns } from '../lib/data/addons';
import { getIcon } from '../lib/icons';

export default function AddOnsGrid() {
  return (
    <section id="addons" className="bg-ivory-deep pb-6 pt-6 md:pb-8 md:pt-8">
      <div className="section-container">
        <SectionHeading
          index="02"
          eyebrow="Extend Your Platform"
          title="Modular"
          highlight="Add-Ons"
          description="Tailor Datacare to your operation. Every add-on snaps into the same platform — differentiated by capability, unified by one design system."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {addOns.map((addon, index) => {
            const Icon = getIcon(addon.icon);
            return (
              <Reveal key={addon.id} delay={(index % 3) * 0.08}>
                <Card className="flex h-full flex-col p-7">
                  <IconBadge icon={Icon} />
                  <h3 className="mt-6 text-lg font-bold text-ink">{addon.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {addon.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {addon.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-ink-muted"
                      >
                        <Check
                          size={15}
                          strokeWidth={3}
                          className="mt-0.5 shrink-0 text-gold-dark"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-sm font-semibold text-gold-dark">
                    <TrendingUp size={16} className="shrink-0" />
                    {addon.valueProposition}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
