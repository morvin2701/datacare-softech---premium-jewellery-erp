'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Building2, Headphones, Store, Wrench } from 'lucide-react';
import Reveal from './ui/Reveal';
import CountUp from './ui/CountUp';

const facts = [
  {
    value: 2000,
    suffix: '+',
    label: 'Active jewellers',
    sub: 'across India & UAE',
    icon: Store,
  },
  {
    value: 18,
    suffix: '',
    label: 'Cities & regions',
    sub: 'multi-store deployments',
    icon: Building2,
  },
  {
    value: 40,
    suffix: '+',
    label: 'Hardware integrations',
    sub: 'scales, RFID, printers',
    icon: Wrench,
  },
  {
    value: 99,
    suffix: '%',
    label: 'Support satisfaction',
    sub: 'dedicated success team',
    icon: Headphones,
  },
];

function FactCard({ fact, index, progress, reduceMotion }) {
  const depth = index % 2 === 0 ? 1 : -1;
  const rotateX = useTransform(progress, [0, 1], [8 * depth, -8 * depth]);
  const rotateY = useTransform(progress, [0, 1], [-10 * depth, 10 * depth]);
  const y = useTransform(progress, [0, 1], [18 + index * 6, -10 - index * 4]);
  const glowX = useTransform(progress, [0, 1], ['10%', '90%']);

  const Icon = fact.icon;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28, rotateX: 16, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={
        reduceMotion
          ? undefined
          : {
              y,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      className="group relative rounded-[1.7rem] border border-white/10 bg-gradient-to-b from-white/[0.085] via-white/[0.06] to-white/[0.035] p-[1px] shadow-[0_22px_70px_rgba(0,0,0,0.32)] transition-transform duration-500 ease-premium"
    >
      <div className="relative h-full overflow-hidden rounded-[1.65rem] border border-navy-line/80 bg-navy-light/90 px-6 py-7 backdrop-blur-md sm:px-7">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,74,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(61,90,128,0.22),transparent_36%)] opacity-80"
          style={reduceMotion ? undefined : { x: glowX }}
          transition={reduceMotion ? undefined : { ease: 'linear' }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-60" />

        <div className="relative flex items-start justify-between gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold shadow-[0_0_0_1px_rgba(200,162,74,0.08)] transition-transform duration-500 ease-premium group-hover:scale-105 group-hover:bg-gold/15">
            <Icon size={20} strokeWidth={1.85} />
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45">
            Verified
          </span>
        </div>

        <dt className="sr-only">{fact.label}</dt>
        <dd className="relative mt-6 font-serif text-[3.35rem] font-semibold leading-none text-white sm:text-[4.15rem] lg:text-[4.4rem]">
          <span className="relative z-10">
            <CountUp end={fact.value} suffix={fact.suffix} />
          </span>
          <span
            aria-hidden="true"
            className="absolute left-1 top-1 text-white/10 blur-[1px]"
          >
            <CountUp end={fact.value} suffix={fact.suffix} />
          </span>
        </dd>

        <p className="relative mt-4 text-base font-semibold text-white/92">
          {fact.label}
        </p>
        <p className="relative mt-1.5 text-sm leading-relaxed text-white/52">
          {fact.sub}
        </p>

        <div className="relative mt-7 h-px overflow-hidden bg-white/8">
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
            animate={reduceMotion ? undefined : { x: ['-35%', '120%'] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'linear' }}
          />
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
    offset: ['start 85%', 'end 20%'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const glowX = useTransform(progress, [0, 1], ['-8%', '14%']);
  const glowY = useTransform(progress, [0, 1], ['6%', '-4%']);
  const gridShift = useTransform(progress, [0, 1], ['0px', '-18px']);

  return (
    <section ref={sectionRef} className="ambient-navy section-padding relative overflow-hidden text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-28 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]"
          style={reduceMotion ? undefined : { x: glowX, y: glowY }}
        />
        <motion.div
          className="absolute -bottom-36 left-[-12%] h-[24rem] w-[24rem] rounded-full bg-link/14 blur-[120px]"
          style={reduceMotion ? undefined : { y: gridShift }}
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

      <div className="section-container relative">
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
            Built for multi-store jewellery operations, hardware workflows, and responsive support teams that need reliability at scale.
          </p>
        </Reveal>

        <dl
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          style={{ perspective: '1600px' }}
        >
          {facts.map((fact, i) => (
            <FactCard
              key={fact.label}
              fact={fact}
              index={i}
              progress={progress}
              reduceMotion={reduceMotion}
            />
          ))}
        </dl>
      </div>
    </section>
  );
}
