import { Star } from 'lucide-react';
import Counter from './Counter';
import { company, teamSize } from '@/lib/site';

export default function TrustStrip() {
  const { years, customers, googleRating, googleReviews } = company.stats;
  const items = [
    { value: years, suffix: '+', label: 'Years building jewellery software' },
    { value: customers, suffix: '+', label: 'Customers trust DataCare' },
    { value: teamSize, suffix: '', label: 'Sales & service experts' },
    { value: googleRating, decimals: 1, suffix: ' / 5', label: `Google rating · ${googleReviews}+ reviews`, star: true, href: company.reviewsUrl },
  ];
  return (
    <section aria-label="DataCare Softech in numbers" className="relative border-y border-white/10 bg-navy text-white">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => {
          const Inner = (
            <>
              <p className="flex items-center justify-center gap-2 font-display text-4xl font-medium text-gold-light sm:text-5xl">
                {it.star ? <Star size={26} className="fill-gold text-gold" aria-hidden="true" /> : null}
                <Counter value={it.value} decimals={it.decimals} suffix={it.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55 sm:text-[0.78rem]">{it.label}</p>
            </>
          );
          return (
            <div
              key={it.label}
              className={`px-3 py-9 text-center sm:py-11 ${i % 2 ? 'border-l border-white/10' : ''} ${i > 1 ? 'border-t border-white/10 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
              data-reveal
              style={{ '--delay': `${i * 90}ms` }}
            >
              {it.href ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="block transition hover:opacity-80">
                  {Inner}
                </a>
              ) : (
                Inner
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
