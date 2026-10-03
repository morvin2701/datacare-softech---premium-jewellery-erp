'use client';

import {
  Printer,
  ScanBarcode,
  ScanLine,
  Scale,
  Tablet,
  Server,
  Laptop,
  Nfc,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Cable,
} from 'lucide-react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';

const devices = [
  { label: 'Barcode Printers', icon: Printer, tag: 'USB · Network' },
  { label: 'Barcode Scanners', icon: ScanBarcode, tag: 'Wireless' },
  { label: 'RFID Readers', icon: Nfc, tag: 'HF · UHF' },
  { label: 'Digital Scales', icon: Scale, tag: 'RS-232' },
  { label: 'POS Terminals', icon: Tablet, tag: 'Android · iOS' },
  { label: 'Label & Tags', icon: ScanLine, tag: 'Custom forms' },
  { label: 'Cloud Servers', icon: Server, tag: 'Multi-store' },
  { label: 'Workstations', icon: Laptop, tag: 'Counter-ready' },
];

const points = [
  'Zero-configuration setup for supported devices',
  'Support for both USB and network peripherals',
  'Offline caching for uninterrupted sales',
];

const stats = [
  { value: '40+', label: 'Device types' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: 'Plug', label: '& play setup' },
];

const protocols = ['USB', 'Ethernet', 'Wi-Fi', 'Bluetooth', 'RS-232', 'Cloud Sync'];

export default function HardwareEcosystem() {
  return (
    <section id="hardware" className="relative bg-ivory-deep pt-6 pb-3 sm:pt-8 sm:pb-4">
      <div className="mx-auto w-full px-3 sm:px-5 lg:px-6 xl:px-8">
        {/* Full-width framed panel — uses nearly the entire viewport */}
        <div className="ambient-navy relative overflow-hidden rounded-[1.5rem] border border-navy-line/80 text-white shadow-[0_24px_80px_rgba(11,18,32,0.28)] sm:rounded-[1.75rem] lg:rounded-[2rem]">
          {/* Grid texture on device side */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] opacity-[0.35] lg:block"
            style={{
              backgroundImage:
                'linear-gradient(rgba(200,162,74,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(200,162,74,0.08) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-gold/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-link/20 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-stretch">
            {/* Copy column */}
            <div className="flex flex-col border-b border-navy-line/60 px-6 py-5 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-6 xl:px-12">
              <SectionHeading
                eyebrow="Premium Ecosystem"
                title="Integrated Hardware"
                highlight="Ecosystem"
                description="Every counter device — scales, scanners, printers, POS and servers — connected into one seamless Datacare stack."
                align="left"
                dark
                className="max-w-none gap-2.5"
              />

              <ul className="mt-4 grid gap-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/80 sm:text-[0.95rem]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-navy-line/80 bg-navy-light/50 px-3 py-2 backdrop-blur-sm"
                  >
                    <p className="font-serif text-lg font-semibold leading-none text-gold">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-wide text-white/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                as="a"
                href="#contact"
                variant="primary"
                className="mt-4 w-full sm:w-auto"
                iconRight={ArrowRight}
              >
                View Supported Devices
              </Button>
            </div>

            {/* Device matrix — stretches to match left column, cards fill height */}
            <div className="relative flex h-full min-h-0 flex-col gap-3 px-4 py-4 sm:px-6 lg:px-7 lg:py-5 xl:px-9">
              <Reveal className="shrink-0 flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 rounded-pill border border-gold/30 bg-navy-light/80 px-4 py-2 backdrop-blur-sm">
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                    <Zap size={16} />
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-navy" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-brand text-white/80">
                    Unified device hub
                  </span>
                </div>
              </Reveal>

              {/* Compact horizontal device cards — content-sized and centred,
                  never stretched to fill the panel height */}
              <div className="grid flex-1 content-center gap-2.5 sm:grid-cols-2 sm:gap-3">
                {devices.map((device, index) => (
                  <Reveal
                    key={device.label}
                    delay={(index % 4) * 0.05}
                    y={16}
                    className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-navy-line/70 bg-navy-light/60 p-3.5 backdrop-blur-sm transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-gold/45 hover:bg-navy-light/90 hover:shadow-gold-lg sm:p-4"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/25 transition-transform duration-300 ease-premium group-hover:scale-110">
                      <device.icon size={21} strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold leading-snug text-white">
                        {device.label}
                      </p>
                      <p className="mt-0.5 truncate text-[0.65rem] font-medium uppercase tracking-wide text-white/45">
                        {device.tag}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="relative flex h-1.5 w-1.5 shrink-0"
                      title="Connected"
                    >
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    </span>
                  </Reveal>
                ))}
              </div>

              <Reveal
                delay={0.2}
                className="shrink-0 flex flex-wrap items-center gap-2 border-t border-navy-line/60 pt-3"
              >
                <span className="mr-1 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-brand text-white/45">
                  <Cable size={12} className="text-gold" />
                  Protocols
                </span>
                {protocols.map((protocol) => (
                  <span
                    key={protocol}
                    className="rounded-pill border border-navy-line bg-navy/60 px-3 py-1 text-[0.68rem] font-semibold text-white/70"
                  >
                    {protocol}
                  </span>
                ))}
                <span className="ml-auto hidden items-center gap-1.5 text-[0.68rem] font-semibold text-emerald-300 sm:inline-flex">
                  <Shield size={12} />
                  Enterprise-grade security
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
