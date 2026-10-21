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
              <p className="flex items-center justify-center gap-1.5 font-display text-[1.9rem] font-medium text-gold-light sm:gap-2 sm:text-5xl">
                {it.star ? <Star size={20} className="fill-gold text-gold sm:hidden" aria-hidden="true" /> : null}
                {it.star ? <Star size={26} className="hidden fill-gold text-gold sm:block" aria-hidden="true" /> : null}
                <Counter value={it.value} decimals={it.decimals} suffix={it.suffix} />
              </p>
              <p className="mt-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-white/55 sm:mt-2 sm:text-[0.78rem] sm:tracking-[0.16em]">{it.label}</p>
            </>
          );
          return (
            <div
              key={it.label}
              className={`px-2 py-5 text-center sm:px-3 sm:py-11 ${i % 2 ? 'border-l border-white/10' : ''} ${i > 1 ? 'border-t border-white/10 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
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
