import { ArrowUpRight, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { company } from '@/lib/site';

// Add real testimonials here (with the client's permission). Leave the list
// empty rather than inventing quotes — the Google rating block shows either way.
const testimonials = [
  // { name: '', shop: '', city: '', type: 'Retail', quote: '' },
];

export default function Reviews() {
  const { googleRating, googleReviews, customers, years } = company.stats;
  return (
    <section id="reviews" className="section relative overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              What jewellers say about <em className="gold-text">DataCare</em>
            </>
          }
          intro={`For ${years} years, jewellers across Gujarat and India have trusted DataCare Softech with their billing, stock and accounts. Read what our customers say on Google.`}
        />

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <a
            href={company.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dark-surface spot group relative flex flex-col justify-between overflow-hidden rounded-card p-8 text-white shadow-lift transition duration-500 hover:-translate-y-1"
            data-reveal="left"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Google rating</p>
              <div className="mt-4 flex items-end gap-4">
                <span className="font-display text-7xl font-medium text-gold-light">{googleRating}</span>
                <span className="pb-3 text-white/60">/ 5</span>
              </div>
              <div className="mt-3 flex gap-1" aria-label={`${googleRating} out of 5 stars`}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={22} className="fill-gold text-gold" style={{ animation: `twinkle-star 2.4s ${i * 0.15}s ease-in-out infinite` }} aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-white/70">Based on {googleReviews}+ reviews from jewellers and their teams.</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-light">
              Read our Google reviews <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </a>
          <div className="card flex flex-col justify-between p-8" data-reveal="right">
            <div>
              <p className="font-display text-5xl text-ink">{customers.toLocaleString('en-IN')}+</p>
              <p className="mt-2 text-ink-muted">customers using DataCare Softech jewellery software — retailers, wholesalers, manufacturers and imitation jewellery businesses.</p>
            </div>
            <div className="mt-8 rounded-2xl bg-gold-soft/70 p-5">
              <p className="font-semibold text-ink">Already a DataCare customer?</p>
              <p className="mt-1 text-sm text-ink-muted">Your review helps other jewellers choose the right software.</p>
              <a href={company.reviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                Write a Google review <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {testimonials.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card p-6" data-reveal>
                <blockquote className="leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="text-ink-faint"> · {t.shop}, {t.city} · {t.type}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
