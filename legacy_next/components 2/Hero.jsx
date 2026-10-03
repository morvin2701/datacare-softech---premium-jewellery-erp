'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Store,
  ArrowRight,
  Play,
  TrendingUp,
  Activity,
} from 'lucide-react';
import Button from './ui/Button';
import CountUp from './ui/CountUp';
import Magnetic from './ui/Magnetic';
import DashboardMock from './ui/DashboardMock';

const trustBadges = [
  { label: 'SOC-2 Compliant', icon: ShieldCheck },
  { label: 'AI Analytics', icon: Sparkles },
  { label: 'Multi-Store', icon: Store },
];

const stats = [
  { value: 2000, suffix: '+', label: 'Jewellers trust us' },
  { value: 50, suffix: '+', label: 'Multi-store chains' },
  { value: 15, suffix: '+', label: 'Years of expertise' },
];

const rotatingWords = ['Jewellery Empire', 'Gold Business', 'Diamond Trade'];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(
      () => setWordIndex((i) => (i + 1) % rotatingWords.length),
      2800
    );
    return () => clearInterval(interval);
  }, [reduceMotion]);

  // Mouse parallax for the product showcase.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 22 });
  const sy = useSpring(my, { stiffness: 120, damping: 22 });

  const cardX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const cardY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const cardRotX = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const cardRotY = useTransform(sx, [-0.5, 0.5], [-3, 3]);
  const m1X = useTransform(sx, [-0.5, 0.5], [9, -9]);
  const m1Y = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const m2X = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const m2Y = useTransform(sy, [-0.5, 0.5], [-7, 7]);
  const glowX = useTransform(sx, [-0.5, 0.5], [26, -26]);

  const handleMouse = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetMouse = () => {
    mx.set(0);
    my.set(0);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <section
      id="top"
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      className="grain relative overflow-hidden bg-ivory pt-24 pb-14 lg:pt-28 lg:pb-20"
    >
      {/* Ambient aurora */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          style={reduceMotion ? undefined : { x: glowX }}
          className="absolute -top-44 left-[58%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold/12 blur-[120px]"
          animate={reduceMotion ? undefined : { opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-12%] left-[-8%] h-[28rem] w-[28rem] rounded-full bg-link/10 blur-[110px]"
          animate={
            reduceMotion ? undefined : { opacity: [0.3, 0.6, 0.3], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(28,25,23,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,25,23,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(ellipse 75% 60% at 60% 25%, black 25%, transparent 72%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 60% at 60% 25%, black 25%, transparent 72%)',
          }}
        />
      </div>

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-[1fr_1.06fr] lg:gap-12">
        {/* Left — editorial copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="h-px w-10 hairline-gold" />
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-brand text-gold-dark">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Jewellery ERP · India &amp; UAE
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.2] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Master your
            <span className="mt-1 block overflow-visible py-1">
              <span className="relative inline-flex min-h-[1.35em] items-baseline overflow-visible align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={reduceMotion ? false : { y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={reduceMotion ? undefined : { y: '-110%', opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="text-shimmer-gold pr-1 font-serif text-[3rem] font-medium italic sm:text-[3.8rem] lg:text-[4.4rem]"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink-muted"
          >
            The definitive operating system for modern jewellers — unifying
            multi-store inventory, intelligent sales, GST &amp; hallmarking
            compliance, and AI-powered catalog tooling in one exquisite platform.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <Magnetic>
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
              >
                Request a demo
              </Button>
            </Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-gold-dark"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-all duration-300 ease-premium group-hover:border-gold group-hover:text-gold-dark group-hover:shadow-card">
                <Play size={16} className="ml-0.5 fill-current" />
              </span>
              Start free trial
            </a>
          </motion.div>

          {/* Editorial inline stats with serif numerals */}
          <motion.dl
            variants={item}
            className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-6 border-t border-line/80 pt-6"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? 'border-l border-line/80 pl-8' : ''}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-4xl font-semibold leading-none text-ink">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-ink-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.dl>

          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            aria-label="Trust credentials"
          >
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-faint"
              >
                <badge.icon size={15} className="text-gold-dark" />
                {badge.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — product showcase */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md px-4 sm:max-w-xl sm:px-6 lg:max-w-none lg:px-1"
          style={{ perspective: 1400 }}
        >
          {/* Decorative gold rings (kept inside bounds) */}
          <div
            aria-hidden="true"
            className="absolute right-2 -top-3 h-32 w-32 rounded-full border border-gold/20"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-2 h-24 w-24 rounded-full border border-gold/15"
          />

          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    x: cardX,
                    y: cardY,
                    rotateX: cardRotX,
                    rotateY: cardRotY,
                    transformStyle: 'preserve-3d',
                  }
            }
            className="relative"
          >
            {/* Framed live dashboard mock */}
            <div className="relative overflow-hidden rounded-[1.4rem] border border-gold/20 bg-white p-2 shadow-card-hover ring-1 ring-black/[0.03]">
              <div className="relative overflow-hidden rounded-[1rem]">
                <DashboardMock />
                {!reduceMotion && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                    initial={{ x: '-130%' }}
                    animate={{ x: '130%' }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 5.5,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </div>
            </div>

            {/* Floating metric card — revenue (top-left) */}
            <motion.div
              style={reduceMotion ? undefined : { x: m1X, y: m1Y }}
              className="absolute -left-4 -top-7 hidden items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur sm:flex"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold-dark ring-1 ring-gold/20">
                <TrendingUp size={16} />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-base font-semibold text-ink">
                  ₹2.4 Cr
                </p>
                <p className="text-[0.65rem] font-medium uppercase tracking-wide text-ink-faint">
                  Monthly GMV
                </p>
              </div>
            </motion.div>

            {/* Floating metric card — live sync (bottom-left) */}
            <motion.div
              style={reduceMotion ? undefined : { x: m2X, y: m2Y }}
              className="absolute -bottom-4 -left-2 hidden items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur sm:flex"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20">
                <Activity size={16} />
              </span>
              <div className="leading-tight">
                <p className="text-[0.8rem] font-bold text-ink">Live inventory sync</p>
                <p className="text-[0.65rem] font-medium text-ink-faint">
                  Real-time · all stores
                </p>
              </div>
            </motion.div>

            {/* Phone peeking (bottom-right) */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 right-1 hidden w-[22%] overflow-hidden rounded-[1.3rem] border-[5px] border-navy bg-navy shadow-card-hover lg:block"
            >
              <div className="relative aspect-[878/1846]">
                <Image
                  src="/02.png"
                  alt="Datacare Softech mobile app"
                  fill
                  sizes="14vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
