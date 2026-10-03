import { ArrowDown } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { problems } from '@/lib/content';

export default function Problems() {
  return (
    <section id="why" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Problems we solve"
          title={
            <>
              Still managing your jewellery shop in <em className="gold-text">registers and Excel?</em>
            </>
          }
          intro="Every gram of gold matters. DataCare Next tracks each piece from purchase to sale — by gross weight, net weight, fine weight and amount — so your stock, karigar balance and accounts always match."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <article key={p.pain} className="card spot group p-7 hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${(i % 3) * 90}ms` }}>
              <div className="flex items-center gap-4">
                <span className="icon-chip transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon name={p.icon} />
                </span>
                <h3 className="font-display text-xl font-medium leading-snug text-ink">{p.pain}</h3>
              </div>
              <div className="my-5 flex items-center gap-3 text-gold" aria-hidden="true">
                <span className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                <ArrowDown size={16} />
                <span className="h-px flex-1 bg-gradient-to-l from-gold/50 to-transparent" />
              </div>
              <p className="leading-relaxed text-ink-muted">{p.fix}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
