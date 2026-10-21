import { ArrowRight, BadgeCheck, MessageCircle, Star } from 'lucide-react';
import { company } from '@/lib/site';

const glints = [
  { top: '12%', left: '8%', d: '0s', s: 14 },
  { top: '22%', left: '46%', d: '1.2s', s: 10 },
  { top: '70%', left: '4%', d: '2.1s', s: 12 },
  { top: '84%', left: '40%', d: '0.6s', s: 9 },
  { top: '8%', left: '88%', d: '1.7s', s: 13 },
  { top: '58%', left: '96%', d: '2.8s', s: 10 },
];

export default function Hero() {
  const { years, customers, googleRating } = company.stats;
  return (
    <section id="home" className="dark-surface spot relative overflow-hidden text-white">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      {glints.map((g, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={g.s}
          height={g.s}
          className="pointer-events-none absolute text-gold-light"
          style={{ top: g.top, left: g.left, animation: `twinkle 3.6s ease-in-out ${g.d} infinite` }}
        >
          <path fill="currentColor" d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" />
        </svg>
      ))}

      <div className="container-x relative grid items-center gap-8 pb-10 pt-8 md:pb-28 md:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold-light backdrop-blur hero-in" style={{ '--d': '0ms' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="sm:hidden">DataCare Next ERP · Ahmedabad</span>
            <span className="hidden sm:inline">DataCare Next ERP · Made in Ahmedabad for Indian jewellers</span>
          </p>

          <h1 className="mt-5 font-display text-[2.1rem] font-medium leading-[1.08] tracking-tight sm:text-[3.4rem] lg:text-[3.9rem] hero-rise">
            <span className="gold-text">Jewellery Software</span> for Retail, Wholesale &amp; Manufacturing Jewellers in India
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/70 sm:mt-6 sm:text-lg lg:mx-0 hero-rise" style={{ '--d': '80ms' }}>
            <span className="sm:hidden">
              Complete jewellery billing, accounting and stock software — GST &amp; HUID billing, barcode &amp; RFID tags, karigar,
              gold schemes and an owner app, with local support from Ahmedabad.
            </span>
            <span className="hidden sm:inline">
              DataCare Next is complete jewellery billing, accounting and stock management software. GST and HUID billing, gold and
              silver stock with barcode and RFID tags, karigar work, old gold exchange, gold schemes and full accounts — with a
              mobile app for owners and local support from our team in Ahmedabad.
            </span>
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-row lg:justify-start hero-in" style={{ '--d': '200ms' }}>
            <a href="#contact" className="btn-gold !min-h-[3.1rem] px-4 text-[0.9rem] sm:!min-h-[3.25rem] sm:px-7 sm:text-[0.95rem]">
              Book Free Demo <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" data-open-contacts="whatsapp" className="btn-ghost-dark !min-h-[3.1rem] px-4 text-[0.9rem] sm:!min-h-[3.25rem] sm:px-7 sm:text-[0.95rem]">
              <MessageCircle size={18} className="text-[#3ddc84]" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-[0.8rem] text-white/80 sm:mt-9 sm:justify-start sm:gap-x-7 sm:gap-y-3 sm:text-sm sm:text-white/75 lg:justify-start hero-in" style={{ '--d': '300ms' }}>
            <li className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0">
              <BadgeCheck size={16} className="text-gold" aria-hidden="true" /> {years}+ years
            </li>
            <li className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0">
              <BadgeCheck size={16} className="text-gold" aria-hidden="true" /> {customers.toLocaleString('en-IN')}+ customers
            </li>
            <li className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0">
              <Star size={15} className="fill-gold text-gold" aria-hidden="true" /> {googleRating} Google rating
            </li>
          </ul>
        </div>

        {/* Visual: one composed image of the whole product family */}
        <div className="hero-art hero-in relative mx-auto -mb-2 w-full max-w-[46rem] lg:mb-0 lg:max-w-none" style={{ '--d': '150ms' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/datacare-next-ecosystem.webp"
            srcSet="/images/datacare-next-ecosystem-900.webp 900w, /images/datacare-next-ecosystem.webp 1448w"
            sizes="(max-width: 1024px) 94vw, 780px"
            width={1448}
            height={956}
            alt="DataCare Next product family: desktop jewellery software, web-based ERP dashboard, offline order app and WhatsApp Business messages"
            fetchPriority="high"
            decoding="async"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
