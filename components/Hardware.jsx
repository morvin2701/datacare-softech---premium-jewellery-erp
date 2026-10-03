import Image from 'next/image';
import { ArrowRight, Cable, PackageCheck, Wrench } from 'lucide-react';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { hardware } from '@/lib/content';

function DeviceCard({ d, side, i }) {
  const right = side === 'right';
  return (
    <li className="relative" data-reveal={right ? 'right' : 'left'} style={{ '--delay': `${i * 110}ms` }}>
      <div className={`spot group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition duration-500 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/[0.07] ${right ? '' : 'lg:flex-row-reverse lg:text-right'}`}>
        <span className="icon-chip-dark transition duration-500 group-hover:bg-gold group-hover:text-navy">
          <Icon name={d.icon} />
        </span>
        <div className="min-w-0 flex-1">
          <div className={`flex flex-wrap items-center gap-2 ${right ? '' : 'lg:justify-end'}`}>
            <h3 className="font-semibold text-white">{d.title}</h3>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-white/60">{d.text}</p>
          <span
            className={`mt-3 inline-block rounded-full px-2.5 py-0.5 text-[0.66rem] font-semibold uppercase tracking-wider ${
              d.tag === 'We supply' ? 'bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/25' : 'bg-gold/10 text-gold-light ring-1 ring-gold/30'
            }`}
          >
            {d.tag}
          </span>
        </div>
      </div>
      {/* Connector into the hub (desktop) */}
      <span aria-hidden="true" className={`hw-wire absolute top-1/2 hidden h-px w-10 lg:block xl:w-14 ${right ? 'right-full' : 'left-full'}`}>
        <span className={`hw-pulse ${right ? 'hw-pulse-rev' : ''}`} style={{ animationDelay: `${i * 0.6}s` }} />
      </span>
    </li>
  );
}

export default function Hardware() {
  const left = hardware.slice(0, 3);
  const right = hardware.slice(3);
  const strip = [
    { icon: Cable, label: 'USB, Network & Bluetooth devices' },
    { icon: Wrench, label: 'Installed & configured by our team' },
    { icon: PackageCheck, label: 'One vendor for software + hardware' },
  ];

  return (
    <section id="hardware" className="dark-surface section relative overflow-hidden text-white">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Hardware integrations"
          title={
            <>
              Works with your <em className="gold-text">RFID, barcode &amp; weighing scale</em> hardware
            </>
          }
          intro="We help you choose the right devices, supply them, and connect everything to DataCare Next — so software and hardware work as one counter."
        />

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,1.05fr)_1fr] lg:gap-10 xl:gap-14">
          {/* Hub */}
          <div className="relative order-first lg:order-none" data-reveal="zoom">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15" />
            <div aria-hidden="true" className="animate-spin-slow absolute left-1/2 top-1/2 aspect-square w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/20" />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[80px]" />
            <div className="relative flex flex-col items-center py-6">
              <span className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                DataCare Next hub
              </span>
              <Image
                src="/images/datacare-next-on-desktop-laptop-tablet-mobile.webp"
                alt="DataCare Next jewellery software connected to barcode printer, scanner, RFID and weighing scale"
                width={1400}
                height={652}
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="animate-float-slow relative w-full"
              />
              <p className="relative z-10 mt-4 text-center text-sm text-white/55">Desktop · Laptop · Tablet · Mobile</p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:order-first lg:grid-cols-1">
            {left.map((d, i) => (
              <DeviceCard key={d.title} d={d} side="left" i={i} />
            ))}
          </ul>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {right.map((d, i) => (
              <DeviceCard key={d.title} d={d} side="right" i={i} />
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur lg:flex-row" data-reveal>
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {strip.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-white/75">
                <I size={17} className="text-gold" aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-gold shrink-0">
            Ask for a hardware quote <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
