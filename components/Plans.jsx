'use client';

import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Diamond, Download, Minus, Plus } from 'lucide-react';
import { PLAN_FILTERS, editionCards, editionMatrix, editions } from '@/lib/content';

function Cell({ v }) {
  if (v === true) return <Check size={17} strokeWidth={2.6} className="mx-auto text-emerald-600" aria-label="Included" />;
  if (v === false) return <Minus size={15} className="mx-auto text-ink-faint/50" aria-label="Not included" />;
  if (v === 'add')
    return (
      <span className="inline-flex items-center gap-0.5 rounded-full bg-gold-soft px-2 py-0.5 text-[0.66rem] font-semibold text-gold-dark" title="Paid add-on">
        <Plus size={10} strokeWidth={3} aria-hidden="true" /> Add-on
      </span>
    );
  return <span className="text-xs font-semibold text-ink">{v}</span>;
}

export default function Plans() {
  const [filter, setFilter] = useState('All');
  const [full, setFull] = useState(false);
  const visible = filter === 'All' ? editionCards : editionCards.filter((e) => e.type === filter);
  const rowCount = editionMatrix.reduce((n, g) => n + g.rows.length, 0);

  return (
    <section id="plans" className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">Plans & editions</p>
          <h2 className="h2 mt-4">
            DataCare Next Plans — choose the <em className="gold-text">right edition</em>
          </h2>
          <p className="lead mt-5">
            From a single showroom to a multi-branch chain — every edition builds on the one before it, so you only pay for
            the depth you need.
          </p>
        </div>

        {/* Business-type filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" data-reveal>
          {PLAN_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition duration-300 ${
                filter === f ? 'bg-navy text-white shadow-card' : 'border border-line bg-white text-ink-muted hover:border-gold hover:text-gold-dark'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Edition cards */}
        <div
          key={filter}
          className={`mx-auto mt-12 grid gap-6 sm:grid-cols-2 ${visible.length >= 4 ? 'lg:grid-cols-3 xl:grid-cols-5' : 'lg:max-w-4xl lg:grid-cols-2'} ${visible.length === 1 ? '!max-w-sm !grid-cols-1' : ''}`}
        >
          {visible.map((e, i) => {
            const dark = e.flagship;
            return (
              <article
                key={e.name}
                className={`relative flex flex-col rounded-card border p-7 pt-9 text-center transition duration-500 ease-premium hover:-translate-y-1.5 ${
                  dark ? 'glow-ring border-gold/70 bg-navy text-white shadow-gold' : 'card hover:shadow-lift'
                }`}
                style={{ animation: `hero-in 0.5s var(--ease) ${i * 70}ms both` }}
              >
                {e.badge ? (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-navy shadow-gold">
                    <Diamond size={11} aria-hidden="true" /> {e.badge}
                  </span>
                ) : null}

                <h3 className={`font-display text-2xl font-semibold ${dark ? 'text-white' : 'text-ink'}`}>{e.name}</h3>
                <p className={`mt-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${dark ? 'text-gold-light' : 'text-ink-faint'}`}>
                  {e.tagline}
                </p>
                <div className={`mx-auto mt-5 h-px w-full ${dark ? 'bg-gradient-to-r from-transparent via-gold/60 to-transparent' : 'bg-line'}`} aria-hidden="true" />

                <ul className="mt-6 flex-1 space-y-3.5 text-left">
                  {e.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[0.9rem] leading-snug ${dark ? 'text-white/85' : 'text-ink-muted'}`}>
                      <Check size={15} strokeWidth={3} className={`mt-0.5 shrink-0 ${dark ? 'text-gold-light' : 'text-gold-dark'}`} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`mt-8 w-full whitespace-nowrap !px-4 ${dark ? 'btn-gold' : 'btn-ghost'}`}>
                  Request Demo <ArrowRight size={16} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-faint" data-reveal>
          Also available: <span className="font-semibold text-ink">Lite</span> and <span className="font-semibold text-ink">Basic</span>{' '}
          starter editions for a single counter — see the full comparison below. Price depends on edition, number of computers and
          add-ons · free demo · training included · transparent AMC.
        </p>

        {/* Full comparison */}
        <div className="mt-10 overflow-hidden rounded-card border border-line bg-white shadow-card" data-reveal>
          <div className={`relative overflow-x-auto transition-[max-height] duration-700 ease-premium ${full ? 'max-h-[400rem]' : 'max-h-[34rem] overflow-y-hidden'}`}>
            <table className="w-full min-w-[52rem] border-collapse text-sm">
              <caption className="sr-only">DataCare Next edition comparison – Lite, Basic, Standard, Ultra, Pro, Advance, Enterprise</caption>
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="sticky left-0 z-10 bg-navy px-4 py-4 text-left font-display text-base font-medium">
                    Feature
                  </th>
                  {editions.map((e) => (
                    <th key={e} scope="col" className={`px-2 py-4 text-center text-xs font-semibold uppercase tracking-wider ${e === 'Enterprise' ? 'bg-gold text-navy' : ''}`}>
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              {editionMatrix.map((g) => (
                <tbody key={g.group}>
                  <tr>
                    <th colSpan={8} scope="colgroup" className="bg-ivory-deep px-4 py-2.5 text-left text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                      {g.group}
                    </th>
                  </tr>
                  {g.rows.map(([label, vals]) => (
                    <tr key={label} className="border-t border-line/70 transition hover:bg-ivory">
                      <th scope="row" className="sticky left-0 z-10 bg-white px-4 py-3 text-left font-normal text-ink">
                        {label}
                      </th>
                      {vals.map((v, i) => (
                        <td key={i} className={`px-2 py-3 text-center ${i === editions.length - 1 ? 'bg-gold-soft/60' : ''}`}>
                          <Cell v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
            {!full ? <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" /> : null}
          </div>
          <div className="flex justify-center border-t border-line bg-white py-3">
            <button type="button" onClick={() => setFull((v) => !v)} aria-expanded={full} className="btn-ghost !min-h-[2.5rem]">
              {full ? 'Show less' : `Compare all ${rowCount} features`}
              <ChevronDown size={16} className={`transition duration-500 ${full ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 border-t border-line bg-ivory px-5 py-4 text-xs text-ink-faint sm:flex-row">
            <p className="sm:mr-auto">
              <span className="font-semibold text-gold-dark">Add-on</span> = available at extra cost. Hardware is priced separately.
            </p>
            <a href="/versionlist.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-ink transition hover:text-gold-dark">
              <Download size={14} aria-hidden="true" /> Full feature list (PDF)
            </a>
            <a href="/datacare-softech-brochure.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-ink transition hover:text-gold-dark">
              <Download size={14} aria-hidden="true" /> Company brochure (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
