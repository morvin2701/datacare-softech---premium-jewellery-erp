import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { solutions } from '@/lib/content';

export default function Solutions() {
  return (
    <section id="solutions" className="section relative bg-ivory-deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who it is for"
          title={
            <>
              One Jewellery ERP for <em className="gold-text">every type</em> of jewellery business
            </>
          }
          intro="Retailer, wholesaler, manufacturer or chain — one jewellery management software that adapts to how you work, and grows with you from a single counter to many branches."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <article
              key={s.title}
              className="spot group relative overflow-hidden rounded-card border border-line bg-white p-7 shadow-card transition duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift"
              data-reveal
              style={{ '--delay': `${(i % 3) * 90}ms` }}
            >
              <span aria-hidden="true" className="absolute right-6 top-5 font-display text-5xl italic leading-none text-gold/20 transition duration-700 group-hover:text-gold/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="icon-chip relative">
                <Icon name={s.icon} />
              </span>
              <h3 className="relative mt-5 font-display text-2xl font-medium text-ink">{s.title}</h3>
              <p className="relative mt-3 leading-relaxed text-ink-muted">{s.text}</p>
              <p className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold text-gold-dark">
                Recommended: {s.plan}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
