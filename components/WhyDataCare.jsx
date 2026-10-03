import { Quote } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { comparison, reasons } from '@/lib/content';

export default function WhyDataCare() {
  return (
    <section id="why-datacare" className="section relative bg-ivory-deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why DataCare"
          title={
            <>
              Why jewellers choose <em className="gold-text">DataCare Next</em>
            </>
          }
          intro="Comparing the best jewellery software in India? Look beyond the feature list — look at local support, entry speed and how well the software fits your trade."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <article key={r.title} className="card spot group flex gap-4 p-6 hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${(i % 3) * 80}ms` }}>
              <span className="icon-chip transition duration-500 group-hover:bg-gold group-hover:text-navy">
                <Icon name={r.icon} />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{r.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="overflow-hidden rounded-card border border-line bg-white shadow-card" data-reveal="left">
            <table className="w-full text-sm">
              <caption className="sr-only">DataCare Next compared with typical jewellery software</caption>
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="px-4 py-4 text-left font-display text-base font-medium sm:px-5">What matters to jewellers</th>
                  <th scope="col" className="bg-gold px-3 py-4 text-center text-xs font-bold uppercase tracking-wider text-navy">DataCare Next</th>
                  <th scope="col" className="px-3 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white/60">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ours, others]) => (
                  <tr key={label} className="border-t border-line/70">
                    <th scope="row" className="px-4 py-3 text-left font-normal text-ink sm:px-5">{label}</th>
                    <td className="bg-gold-soft/50 px-3 py-3 text-center">
                      {ours === true ? (
                        <span className="ico ico-check text-[18px] text-emerald-600" role="img" aria-label="Yes" />
                      ) : (
                        <span className="text-xs font-semibold text-gold-dark">{ours}</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-center text-xs text-ink-faint">{others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="dark-surface relative overflow-hidden rounded-card p-8 text-white shadow-lift" data-reveal="right">
            <Quote size={40} className="text-gold" aria-hidden="true" />
            <blockquote className="mt-4 font-display text-2xl leading-snug">
              A feature list is not enough. Ask every vendor to show your real entry speed. We are happy to do a side-by-side
              demo with your own data.
            </blockquote>
            <figcaption className="mt-6 text-sm text-white/60">— The DataCare Softech team, Ahmedabad</figcaption>
            <a href="#contact" className="btn-gold mt-8">Book a side-by-side demo</a>
          </figure>
        </div>
      </div>
    </section>
  );
}
