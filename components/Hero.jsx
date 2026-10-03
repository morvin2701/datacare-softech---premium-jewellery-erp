import Image from 'next/image';
import { ArrowRight, BadgeCheck, MessageCircle, Star } from 'lucide-react';
import HeroInvoice from './HeroInvoice';
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

      <div className="container-x relative grid items-center gap-14 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold-light backdrop-blur hero-in" style={{ '--d': '0ms' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            DataCare Next ERP · Made in Ahmedabad for Indian jewellers
          </p>

          <h1 className="mt-6 font-display text-[2.45rem] font-medium leading-[1.04] tracking-tight sm:text-[3.4rem] lg:text-[3.9rem] hero-rise">
            <span className="gold-text">Jewellery Software</span> for Retail, Wholesale &amp; Manufacturing Jewellers in India
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg hero-rise" style={{ '--d': '80ms' }}>
            DataCare Next is complete jewellery billing, accounting and stock management software. GST and HUID billing, gold and
            silver stock with barcode and RFID tags, karigar work, old gold exchange, gold schemes and full accounts — with a
            mobile app for owners and local support from our team in Ahmedabad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row hero-in" style={{ '--d': '200ms' }}>
            <a href="#contact" className="btn-gold !min-h-[3.25rem] px-7 text-[0.95rem]">
              Book Free Demo <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" data-open-contacts="whatsapp" className="btn-ghost-dark !min-h-[3.25rem] px-7 text-[0.95rem]">
              <MessageCircle size={18} className="text-[#3ddc84]" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75 hero-in" style={{ '--d': '300ms' }}>
            <li className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-gold" aria-hidden="true" /> {years}+ years
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-gold" aria-hidden="true" /> {customers.toLocaleString('en-IN')}+ customers
            </li>
            <li className="flex items-center gap-2">
              <Star size={17} className="fill-gold text-gold" aria-hidden="true" /> {googleRating} Google rating
            </li>
          </ul>
        </div>

        {/* Visual: real desktop screen (hero object) + owner app + compact live bill */}
        <div className="relative mx-auto w-full max-w-[40rem] pt-6 sm:pb-28 lg:mr-0" data-reveal="zoom" style={{ '--delay': '200ms' }}>
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[100px]" />

          {/* Desktop */}
          <div className="relative mr-0 rounded-2xl border border-white/15 bg-white/5 p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,.8)] backdrop-blur sm:mr-20">
            <div className="flex items-center gap-1.5 px-2 pb-2 pt-1" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate rounded-md bg-white/10 px-3 py-0.5 text-[0.65rem] text-white/50">DataCare Next — Jewellery ERP</span>
              <span className="ml-auto hidden items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-0.5 text-[0.62rem] font-medium text-emerald-300 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Gold rate synced
              </span>
            </div>
            <Image
              src="/images/datacare-next-jewellery-software-desktop.webp"
              alt="DataCare Next jewellery billing software main screen with sales, purchase, karigar and GST menus"
              width={1600}
              height={850}
              priority
              sizes="(max-width: 1024px) 92vw, 600px"
              className="rounded-xl"
            />
          </div>

          {/* Owner app — bottom right, overlapping the screen edge */}
          <div className="animate-float-slow absolute bottom-0 right-0 hidden w-[10rem] sm:block" style={{ animationDelay: '1s' }}>
            <div className="rounded-[1.7rem] border-[5px] border-navy-muted bg-navy p-0.5 shadow-lift">
              <Image
                src="/images/owner-app-dashboard.webp"
                alt="DataCare jewellery mobile app for owners showing gold rate, silver rate and reports"
                width={560}
                height={1214}
                sizes="160px"
                className="rounded-[1.3rem]"
              />
            </div>
          </div>

          {/* Live sample bill — bottom left */}
          <div className="animate-float relative mx-auto mt-4 w-max sm:absolute sm:-left-8 sm:bottom-4 sm:mt-0">
            <HeroInvoice />
          </div>
        </div>
      </div>
    </section>
  );
}
