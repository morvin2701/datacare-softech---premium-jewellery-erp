'use client';

import { useState } from 'react';
import { ArrowRight, MessageCircle, Plus } from 'lucide-react';
import { FAQ_CATEGORIES, faqs } from '@/lib/content';

// Native <details>: every answer is in the HTML for search engines; the same
// Q&A feeds the FAQPage schema. `name` makes each column an exclusive accordion.
export default function Faq() {
  const [cat, setCat] = useState('All');
  const ordered = [...faqs].sort((a, b) => FAQ_CATEGORIES.indexOf(a.cat) - FAQ_CATEGORIES.indexOf(b.cat));
  const list = cat === 'All' ? ordered : ordered.filter((f) => f.cat === cat);
  const left = list.filter((_, i) => i % 2 === 0);
  const right = list.filter((_, i) => i % 2 === 1);

  const Item = ({ f, open }) => (
    <details key={f.q} name={`faq-${cat}`} open={open} className="card group overflow-hidden open:border-gold/50 open:shadow-lift">
      <summary className="flex cursor-pointer items-start justify-between gap-4 px-6 py-5">
        <span>
          <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">{f.cat}</span>
          <h3 className="mt-1 text-[1.02rem] font-semibold leading-snug text-ink">{f.q}</h3>
        </span>
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-dark transition duration-500 group-open:rotate-45 group-open:bg-gold group-open:text-navy">
          <Plus size={16} aria-hidden="true" />
        </span>
      </summary>
      <div className="px-6 pb-6 leading-relaxed text-ink-muted">{f.a}</div>
    </details>
  );

  return (
    <section id="faq" className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">FAQ</p>
          <h2 className="h2 mt-4">
            Frequently asked questions about <em className="gold-text">jewellery software</em>
          </h2>
          <p className="lead mt-5">Straight answers on price, GST, karigar, gold schemes, RFID and support — from the team that builds DataCare Next.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2" data-reveal>
          {FAQ_CATEGORIES.map((c) => {
            const count = c === 'All' ? faqs.length : faqs.filter((f) => f.cat === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  cat === c ? 'bg-navy text-white shadow-card' : 'border border-line bg-white text-ink-muted hover:border-gold hover:text-gold-dark'
                }`}
              >
                {c}
                <span className={`rounded-full px-1.5 text-[0.68rem] font-semibold ${cat === c ? 'bg-white/15 text-white' : 'bg-ivory-deep text-ink-faint'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <div key={cat} className="mt-10 grid items-start gap-4 lg:grid-cols-2" style={{ animation: 'hero-in 0.45s var(--ease) both' }}>
          <div className="space-y-4">
            {left.map((f, i) => (
              <Item key={f.q} f={f} open={i === 0} />
            ))}
          </div>
          <div className="space-y-4">
            {right.map((f) => (
              <Item key={f.q} f={f} />
            ))}
          </div>
        </div>

        <div className="dark-surface mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl px-7 py-6 text-white shadow-lift md:flex-row" data-reveal>
          <div>
            <p className="font-display text-2xl">Still have a question?</p>
            <p className="mt-1 text-sm text-white/60">Call or WhatsApp any member of our team — we reply Monday to Saturday, 10 AM to 7 PM.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <a href="/#about" data-open-contacts="whatsapp" className="btn-ghost-dark">
              <MessageCircle size={16} className="text-[#3ddc84]" aria-hidden="true" /> Ask on WhatsApp
            </a>
            <a href="#contact" className="btn-gold">
              Book Free Demo <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
