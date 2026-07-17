'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Building2, Headphones, MoveRight, Sparkles, Store, Wrench } from 'lucide-react';
import Reveal from './ui/Reveal';
import CountUp from './ui/CountUp';

const facts = [
  {
    value: 7500,
    suffix: '+',
    label: 'Clients served',
    sub: 'Across India, the GCC, and multi-store retail teams',
    icon: Store,
    kicker: 'Enterprise reach',
    panel: {
      tag: 'Trusted network',
      title: 'Retailers who stay with us',
      stats: [
        { label: 'In business', value: '15+ yrs' },
        { label: 'Client retention', value: '90%+' },
      ],
      points: ['Multi-store chains', 'Franchise rollouts', 'Retail + wholesale'],
    },
  },
  {
    value: 18,
    suffix: '',
    label: 'Cities and regions served',
    sub: 'Connected rollouts across retail hubs and trade markets',
    icon: Building2,
    kicker: 'Regional presence',
    panel: {
      tag: 'Growing footprint',
      title: 'Rollouts that scale by region',
      stats: [
        { label: 'Countries', value: '3' },
        { label: 'Retail hubs', value: '18' },
      ],
      points: ['Pan-India coverage', 'GCC trade markets', 'Local-language onboarding'],
    },
  },
  {
    value: 40,
    suffix: '+',
    label: 'Hardware integrations',
    sub: 'Scales, RFID, printers, billing devices, and more',
    icon: Wrench,
    kicker: 'Shop-floor ready',
    panel: {
      tag: 'Plug and play',
      title: 'Devices synced out of the box',
      stats: [
        { label: 'Device types', value: '40+' },
        { label: 'Setup time', value: 'Same day' },
      ],
      points: ['RFID + barcode readers', 'Weighing scales', 'Billing + tag printers'],
    },
  },
  {
    value: 2,
    suffix: '',
    label: 'Branches in India and Dubai',
    sub: 'Local support, faster deployment, and on-site assistance',
    icon: Headphones,
    kicker: 'Always within reach',
    panel: {
      tag: 'On the ground',
      title: 'Support close to your stores',
      stats: [
        { label: 'Support desk', value: '24/7' },
        { label: 'On-site visits', value: 'Scheduled' },
      ],
      points: ['On-site assistance', 'Faster deployment', 'Dedicated account team'],
    },
  },
];

const SLIDE_COUNT = facts.length;

/**
 * One horizontal slide. `progress` is the section's 0..1 scroll progress;
 * each slide derives its own local progress (-1 entering, 0 centered,
 * 1 leaving) so the 3D tilt, fade, and parallax are per-slide.
 */
function FactSlide({ fact, index, progress }) {
  const local = useTransform(progress, (p) =>
    Math.max(-1, Math.min(1, p * (SLIDE_COUNT - 1) - index))
  );

  const rotateY = useTransform(local, [-1, 0, 1], [18, 0, -18]);
  const scale = useTransform(local, [-1, 0, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(local, [-1, -0.55, 0, 0.55, 1], [0.35, 1, 1, 1, 0.35]);
  const contentX = useTransform(local, [-1, 1], [70, -70]);
  const Icon = fact.icon;

  return (
    <div className="flex h-full w-full flex-none items-center px-4 sm:px-6 lg:px-8">
      <motion.div
        style={{ rotateY, scale, opacity, transformStyle: 'preserve-3d' }}
        className="relative mx-auto h-full max-h-full w-full max-w-content overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(16,24,45,0.97),rgba(11,17,32,0.96)_50%,rgba(18,27,48,0.97))] shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:rounded-[2.25rem]"
      >
        {/* Ambient card lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(200,162,74,0.16),transparent_38%),radial-gradient(circle_at_0%_100%,rgba(77,115,170,0.16),transparent_36%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_18%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />

        <div className="relative grid h-full w-full grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
          {/* Left: the number story */}
          <motion.div style={{ x: contentX }} className="flex min-h-0 flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gold/90">
                <Sparkles size={13} strokeWidth={2.2} />
                {fact.kicker}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/45">
                0{index + 1} / 0{SLIDE_COUNT}
              </span>
            </div>

            <p className="mt-6 font-display text-[clamp(3.5rem,9vw,6.75rem)] font-semibold leading-[0.92] tracking-tight text-white sm:mt-8">
              <CountUp end={fact.value} suffix={fact.suffix} />
            </p>

            <h3 className="mt-4 max-w-xl font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
              {fact.label}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              {fact.sub}
            </p>

            <div className="mt-6 hidden items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/35 sm:flex">
              <MoveRight size={14} />
              Keep scrolling
            </div>
          </motion.div>

          {/* Right: supporting panel (hidden on small screens to keep the card airy) */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,74,0.14),transparent_52%)] blur-2xl"
            />
            <div className="relative w-full max-w-[24rem] rounded-[1.5rem] border border-white/10 bg-navy-light/80 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                  <Icon size={22} strokeWidth={1.9} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/45">
                  {fact.panel.tag}
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold text-white/85">{fact.panel.title}</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {fact.panel.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-4"
                  >
                    <p className="text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-serif text-2xl text-gold">{stat.value}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-4 space-y-2.5">
                {fact.panel.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white/70"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/80" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProgressDot({ progress, index }) {
  const active = useTransform(progress, (p) => {
    const d = Math.abs(p * (SLIDE_COUNT - 1) - index);
    return Math.max(0, 1 - d * 2);
  });
  const width = useTransform(active, [0, 1], ['0.5rem', '2rem']);
  const background = useTransform(
    active,
    [0, 1],
    ['rgba(255,255,255,0.22)', 'rgba(200,162,74,0.95)']
  );

  return <motion.span className="h-1.5 rounded-full" style={{ width, background }} />;
}

function SectionHeading() {
  return (
    <Reveal className="flex flex-col gap-3">
      <span className="flex flex-wrap items-center gap-3">
        <span className="font-serif text-sm italic text-gold/70">(facts)</span>
        <span className="eyebrow text-gold/80">
          <span className="h-px w-6 bg-gold" aria-hidden="true" />
          By the numbers
        </span>
      </span>
      <h2 className="max-w-3xl overflow-visible py-1 font-display text-[1.75rem] font-bold leading-[1.25] tracking-tight sm:text-4xl lg:text-[2.75rem]">
        A snapshot of the{' '}
        <span className="text-shimmer-gold font-serif font-medium italic">
          trust we&apos;ve earned
        </span>
      </h2>
    </Reveal>
  );
}

export default function KeyFacts() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Lenis already smooths page scroll; mapping the raw progress keeps the
  // track locked to the pinned section instead of lagging behind it.
  const trackX = useTransform(scrollYProgress, [0, 1], ['0%', `-${(SLIDE_COUNT - 1) * 100}%`]);
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduceMotion) {
    return (
      <section ref={sectionRef} className="ambient-navy relative text-white">
        <div className="section-container relative py-20">
          <SectionHeading />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="rounded-[1.65rem] border border-white/10 bg-navy-light/85 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.32)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                      <Icon size={20} strokeWidth={1.9} />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Verified
                    </span>
                  </div>
                  <p className="mt-6 font-serif text-[3.2rem] font-semibold leading-none text-white">
                    <CountUp end={fact.value} suffix={fact.suffix} />
                  </p>
                  <p className="mt-4 text-base font-semibold text-white/90">{fact.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{fact.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="ambient-navy relative text-white"
      style={{ height: `${SLIDE_COUNT * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Background texture */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]" />
          <div className="absolute -bottom-36 left-[-12%] h-[24rem] w-[24rem] rounded-full bg-link/14 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              maskImage: 'radial-gradient(ellipse 68% 60% at 50% 20%, black 16%, transparent 72%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 68% 60% at 50% 20%, black 16%, transparent 72%)',
            }}
          />
        </div>

        <div className="section-container relative pb-6 pt-14 sm:pt-16 lg:pt-20">
          <SectionHeading />
        </div>

        {/* Horizontal track — full-bleed so % translation maps 1:1 to slides */}
        <div className="relative min-h-0 flex-1" style={{ perspective: '1800px' }}>
          <motion.div className="flex h-full w-full" style={{ x: trackX }}>
            {facts.map((fact, index) => (
              <FactSlide
                key={fact.label}
                fact={fact}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>

        {/* Progress rail */}
        <div className="section-container relative pb-8 pt-6 sm:pb-10">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              {facts.map((fact, index) => (
                <ProgressDot key={fact.label} progress={scrollYProgress} index={index} />
              ))}
            </div>
            <div className="hidden h-px flex-1 overflow-hidden rounded-full bg-white/10 sm:block">
              <motion.div
                className="h-full w-full origin-left bg-gradient-to-r from-gold/70 to-gold"
                style={{ scaleX: barScale }}
              />
            </div>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/35">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
