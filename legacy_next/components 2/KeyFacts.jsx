'use client';

import Reveal from './ui/Reveal';
import CountUp from './ui/CountUp';

const facts = [
  { value: 2000, suffix: '+', label: 'Active jewellers', sub: 'across India & UAE' },
  { value: 18, suffix: '', label: 'Cities & regions', sub: 'multi-store deployments' },
  { value: 40, suffix: '+', label: 'Hardware integrations', sub: 'scales, RFID, printers' },
  { value: 99, suffix: '%', label: 'Support satisfaction', sub: 'dedicated success team' },
];

export default function KeyFacts() {
  return (
    <section className="ambient-navy section-padding text-white">
      <div className="section-container">
        <Reveal className="flex flex-col gap-3">
          <span className="flex items-center gap-3">
            <span className="font-serif text-sm italic text-gold/70">(facts)</span>
            <span className="eyebrow text-gold/80">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              By the numbers
            </span>
          </span>
          <h2 className="max-w-3xl overflow-visible py-1 font-display text-[2rem] font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[3.25rem]">
            A snapshot of the{' '}
            <span className="text-shimmer-gold font-serif font-medium italic">
              trust we&apos;ve earned
            </span>
          </h2>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={(i % 4) * 0.08}>
              <div className="border-t border-navy-line pt-6">
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-serif text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
                  <CountUp end={fact.value} suffix={fact.suffix} />
                </dd>
                <p className="mt-4 text-sm font-semibold text-white/90">
                  {fact.label}
                </p>
                <p className="mt-1 text-xs text-white/50">{fact.sub}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
