import { Globe2, Headphones, MessageCircle, MonitorSmartphone, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { process } from '@/lib/content';
import { company } from '@/lib/site';

export default function Process() {
  const support = [
    { icon: Headphones, label: 'Phone support' },
    { icon: MessageCircle, label: 'WhatsApp support' },
    { icon: MonitorSmartphone, label: 'Remote desktop (AnyDesk)' },
    { icon: MapPin, label: 'On-site visits all over India' },
    { icon: Globe2, label: 'On-site visits all over UAE' },
  ];
  return (
    <section id="process" className="section relative bg-ivory-deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Implementation"
          title={
            <>
              Switch to DataCare Next in <em className="gold-text">4 simple steps</em>
            </>
          }
          intro="Worried your old data will be lost? Our team walks you through every step — from the first demo to your first bill and beyond."
        />
        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li key={p.title} className="card spot relative p-7 pt-10 hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${i * 100}ms` }}>
              <span className="absolute -top-6 left-7 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark font-display text-xl text-navy shadow-gold ring-4 ring-ivory-deep">
                {i + 1}
              </span>
              <h3 className="font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-reveal>
          {support.map(({ icon: I, label }) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink">
              <I size={16} className="text-gold-dark" aria-hidden="true" /> {label}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm text-white">{company.hours}</span>
        </div>
      </div>
    </section>
  );
}
