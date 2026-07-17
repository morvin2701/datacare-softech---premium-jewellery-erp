'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Building2, Headphones, Sparkles, Store, Wrench } from 'lucide-react';
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
  },
  {
    value: 18,
    suffix: '',
    label: 'Cities and regions served',
    sub: 'Connected rollouts across retail hubs and trade markets',
    icon: Building2,
    kicker: 'Regional presence',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Hardware integrations',
    sub: 'Scales, RFID, printers, billing devices, and more',
    icon: Wrench,
    kicker: 'Shop-floor ready',
  },
  {
    value: 2,
    suffix: '',
    label: 'Branches in India and Dubai',
    sub: 'Local support, faster deployment, and on-site assistance',
    icon: Headphones,
    kicker: 'Always within reach',
  },
];

function FactSlide({ fact, index, progress, reduceMotion }) {
  const depth = index % 2 === 0 ? 1 : -1;
  const rotateX = useTransform(progress, [0, 1], [4, -4]);
  const rotateY = useTransform(progress, [0, 1], [12 * depth, -12 * depth]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const opacity = useTransform(progress, [0, 0.12, 0.88, 1], [0.45, 1, 1, 0.6]);
  const y = useTransform(progress, [0, 1], [22 + index * 6, -14 - index * 4]);
  const shine = useTransform(progress, [0, 1], ['-18%', '118%']);
  const Icon = fact.icon;

  return (
    <motion.div
      style={
        reduceMotion
          ? undefined
          : {
              opacity,
              y,
              rotateX,
              rotateY,
              scale,
              transformStyle: 'preserve-3d',
            }
      }
      className="group relative flex h-full w-screen shrink-0 items-center px-5 sm:px-8 lg:px-10"
    >
      <div className="relative mx-auto flex h-[calc(100vh-2rem)] w-full max-w-7xl items-center overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(14,21,43,0.98),rgba(12,17,33,0.96)_50%,rgba(18,27,47,0.98))] p-[1px] shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:h-[calc(100vh-3rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,74,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(77,115,170,0.18),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_16%)] opacity-90" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-2/5 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-40 blur-2xl"
          style={reduceMotion ? undefined : { x: shine }}
        />

        <div className="relative grid h-full w-full gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-10 lg:px-14">
          <div className="flex flex-col justify-between gap-8">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-gold/80">
                <Sparkles size={14} strokeWidth={2.2} />
                {fact.kicker}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-white/45">
                0{index + 1} / 04
              </span>
            </div>

            <div className="max-w-2xl">
              <div className="flex items-center gap-4 text-white/45">
                <span className="h-px w-10 bg-gold/80" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em]">
                  By the numbers
                </span>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold shadow-[0_0_0_1px_rgba(200,162,74,0.08)]">
                  <Icon size={24} strokeWidth={1.9} />
                </span>

                <div>
                  <p className="font-display text-[clamp(3.75rem,10vw,7.5rem)] font-semibold leading-[0.9] tracking-tight text-white drop-shadow-[0_14px_35px_rgba(0,0,0,0.35)]">
                    <CountUp end={fact.value} suffix={fact.suffix} />
                  </p>
                  <h3 className="mt-5 max-w-xl font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-white">
                    {fact.label}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/62 sm:text-lg">
                    {fact.sub}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
              <ArrowRight size={14} />
              Scroll to move through the experience
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-6 rounded-[2rem] border border-white/6 bg-white/[0.03]" />
            <div className="absolute inset-12 rounded-full border border-gold/10" />
            <div className="absolute inset-20 rounded-full border border-link/12" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,74,0.16),transparent_48%)] blur-3xl" />

            <div className="relative flex w-full max-w-[26rem] flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-navy-light/85 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/42">
                  Live scale
                </span>
              </div>

              <div className="rounded-[1.4rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/42">
                  Production-ready support
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">Reliability</p>
                    <p className="mt-2 font-serif text-3xl text-gold">99.9%</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">Deployments</p>
                    <p className="mt-2 font-serif text-3xl text-gold">Fast</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/68">
                  Multi-store ready
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/68">
                  Hardware synced
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/68">
                  Support backed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function KeyFacts() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const glowX = useTransform(progress, [0, 1], ['-8%', '12%']);
  const glowY = useTransform(progress, [0, 1], ['6%', '-6%']);
  const glow2X = useTransform(progress, [0, 1], ['8%', '-10%']);
  const trackX = useTransform(progress, [0, 1], ['0vw', `-${(facts.length - 1) * 100}vw`]);

  return (
    <section
      ref={sectionRef}
      className="ambient-navy relative overflow-hidden text-white"
      style={reduceMotion ? undefined : { height: `${facts.length * 100}vh` }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-28 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]"
          style={reduceMotion ? undefined : { x: glowX, y: glowY }}
        />
        <motion.div
          className="absolute -bottom-36 left-[-12%] h-[24rem] w-[24rem] rounded-full bg-link/14 blur-[120px]"
          style={reduceMotion ? undefined : { x: glow2X }}
        />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(ellipse 68% 60% at 50% 20%, black 16%, transparent 72%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 68% 60% at 50% 20%, black 16%, transparent 72%)',
          }}
        />
      </div>

      {reduceMotion ? (
        <div className="section-container relative py-20">
          <Reveal className="flex flex-col gap-3">
            <span className="flex flex-wrap items-center gap-3">
              <span className="font-serif text-sm italic text-gold/70">(facts)</span>
              <span className="eyebrow text-gold/80">
                <span className="h-px w-6 bg-gold" aria-hidden="true" />
                By the numbers
              </span>
            </span>
            <h2 className="max-w-3xl overflow-visible py-1 font-display text-[2rem] font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[3.25rem]">
              A snapshot of the{' '}
              <span className="text-shimmer-gold font-serif font-medium italic">
                trust we&apos;ve earned
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-white/58 sm:text-base">
              Built for multi-store jewellery operations, hardware workflows, and support teams that need reliability at scale.
            </p>
          </Reveal>

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
                  <p className="mt-4 text-base font-semibold text-white/92">{fact.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/52">{fact.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="section-container relative w-full">
            <Reveal className="flex flex-col gap-3">
              <span className="flex flex-wrap items-center gap-3">
                <span className="font-serif text-sm italic text-gold/70">(facts)</span>
                <span className="eyebrow text-gold/80">
                  <span className="h-px w-6 bg-gold" aria-hidden="true" />
                  By the numbers
                </span>
              </span>
              <h2 className="max-w-3xl overflow-visible py-1 font-display text-[2rem] font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[3.25rem]">
                A snapshot of the{' '}
                <span className="text-shimmer-gold font-serif font-medium italic">
                  trust we&apos;ve earned
                </span>
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-white/58 sm:text-base">
                Built for multi-store jewellery operations, hardware workflows, and support teams that need reliability at scale.
              </p>
            </Reveal>

            <motion.div
              className="mt-14 flex h-[72vh] items-stretch"
              style={{ x: trackX, perspective: '2200px' }}
            >
              {facts.map((fact, index) => (
                <FactSlide
                  key={fact.label}
                  fact={fact}
                  index={index}
                  progress={progress}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
