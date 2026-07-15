'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  Bell,
  Gem,
  Home,
  Package,
  Search,
  Settings,
  ShoppingBag,
  TrendingUp,
  Users,
} from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Code-built product mock shown in the hero — a modern, brand-matched ERP
 * dashboard with live-feeling data (ticking gold rate, cycling activity
 * feed, self-drawing charts). Decorative: aria-hidden, non-interactive.
 */

const NAV_ICONS = [Home, Package, ShoppingBag, BarChart3, Users, Settings];

const KPIS = [
  { label: "Today's Revenue", value: '₹8.42L', delta: '+12.4%', up: true },
  { label: 'Orders', value: '156', delta: '+8.1%', up: true },
  { label: 'Stock Value', value: '₹4.2Cr', delta: '3 stores', up: null },
];

const BARS = [42, 58, 47, 70, 62, 88, 76];
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const ACTIVITY = [
  { icon: ShoppingBag, text: 'New sale — 22K gold chain', meta: 'Bopal · just now' },
  { icon: Gem, text: 'Hallmark batch verified', meta: '48 items · HUID synced' },
  { icon: Package, text: 'Stock transfer complete', meta: 'Surat → Dubai · 26 pcs' },
  { icon: Users, text: 'Gold scheme installment', meta: '₹10,000 · Scheme #214' },
];

const TOP_ITEMS = [
  { name: 'Antique Jadau Set', code: 'NKL-2210', amt: '₹1.86L', pct: 92 },
  { name: 'Solitaire Ring 0.9ct', code: 'RNG-0834', amt: '₹1.12L', pct: 71 },
  { name: 'Temple Necklace 22K', code: 'NKL-1108', amt: '₹94.5K', pct: 58 },
];

export default function DashboardMock() {
  const reduceMotion = useReducedMotion();
  const [rate, setRate] = useState(74850);
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const rateTimer = setInterval(
      () => setRate((r) => r + (Math.random() > 0.45 ? 10 : -10)),
      2400
    );
    const feedTimer = setInterval(
      () => setFeedIndex((i) => (i + 1) % ACTIVITY.length),
      3200
    );
    return () => {
      clearInterval(rateTimer);
      clearInterval(feedTimer);
    };
  }, [reduceMotion]);

  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
        };

  const feed = [
    ACTIVITY[feedIndex],
    ACTIVITY[(feedIndex + 1) % ACTIVITY.length],
    ACTIVITY[(feedIndex + 2) % ACTIVITY.length],
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex aspect-[1920/1180] select-none overflow-hidden rounded-[1rem] bg-ivory text-left font-sans"
    >
      {/* Sidebar */}
      <div className="flex w-[7.5%] shrink-0 flex-col items-center border-r border-line/80 bg-white py-3">
        <span className="mb-4 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-navy text-gold lg:h-7 lg:w-7">
          <Gem size={13} />
        </span>
        <div className="flex flex-col items-center gap-2.5 lg:gap-3">
          {NAV_ICONS.map((Icon, i) => (
            <span
              key={i}
              className={cn(
                'inline-flex h-5 w-5 items-center justify-center rounded-md lg:h-6 lg:w-6',
                i === 0
                  ? 'bg-gold/15 text-gold-dark ring-1 ring-gold/30'
                  : 'text-ink-faint/70'
              )}
            >
              <Icon size={11} strokeWidth={2} />
            </span>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col px-3 py-2.5 lg:px-4 lg:py-3">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.5rem] font-medium uppercase tracking-[0.14em] text-ink-faint lg:text-[0.55rem]">
              Datacare Next
            </p>
            <p className="font-display text-[0.72rem] font-bold text-ink lg:text-[0.85rem]">
              Good morning, Rajesh
            </p>
          </div>
          <div className="flex items-center gap-1.5 lg:gap-2">
            {/* Live gold rate ticker */}
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-gold/30 bg-gold-soft/60 px-2 py-1 text-[0.52rem] font-semibold text-gold-dark lg:text-[0.6rem]">
              <span className="relative flex h-1 w-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1 w-1 rounded-full bg-gold" />
              </span>
              Gold 22K · ₹{rate.toLocaleString('en-IN')}
              <TrendingUp size={9} />
            </span>
            <span className="hidden h-5 items-center gap-1 rounded-pill border border-line bg-white px-2 text-[0.55rem] text-ink-faint sm:inline-flex lg:h-6">
              <Search size={9} /> Search
            </span>
            <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-line bg-white text-ink-muted lg:h-6 lg:w-6">
              <Bell size={10} />
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy text-[0.5rem] font-bold text-gold lg:h-6 lg:w-6">
              R
            </span>
          </div>
        </div>

        {/* KPI row */}
        <div className="mt-2 grid grid-cols-3 gap-1.5 lg:mt-2.5 lg:gap-2">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              {...enter(0.15 + i * 0.08)}
              className="rounded-lg border border-line/90 bg-white p-1.5 shadow-[0_1px_2px_rgba(11,18,32,0.04)] lg:rounded-xl lg:p-2"
            >
              <p className="truncate text-[0.5rem] font-medium text-ink-faint lg:text-[0.58rem]">
                {kpi.label}
              </p>
              <div className="mt-0.5 flex items-baseline justify-between gap-1">
                <p className="font-serif text-[0.8rem] font-semibold leading-none text-ink lg:text-[1rem]">
                  {kpi.value}
                </p>
                <span
                  className={cn(
                    'rounded-pill px-1 py-px text-[0.45rem] font-bold lg:text-[0.5rem]',
                    kpi.up === null
                      ? 'bg-ivory-deep text-ink-faint'
                      : 'bg-emerald-500/10 text-emerald-600'
                  )}
                >
                  {kpi.delta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart + side column */}
        <div className="mt-1.5 grid min-h-0 flex-1 grid-cols-[1.55fr_1fr] gap-1.5 lg:mt-2 lg:gap-2">
          {/* Weekly sales chart */}
          <motion.div
            {...enter(0.35)}
            className="flex min-h-0 flex-col rounded-lg border border-line/90 bg-white p-1.5 lg:rounded-xl lg:p-2.5"
          >
            <div className="flex items-center justify-between">
              <p className="text-[0.55rem] font-bold text-ink lg:text-[0.65rem]">
                Weekly Sales
              </p>
              <span className="rounded-pill bg-ivory-deep px-1.5 py-px text-[0.45rem] font-semibold text-ink-faint lg:text-[0.5rem]">
                ₹42.6L total
              </span>
            </div>
            <div className="mt-1 flex min-h-0 flex-1 items-end gap-[6%] px-1 pb-3.5 lg:mt-1.5">
              {BARS.map((h, i) => (
                <div key={i} className="relative flex h-full flex-1 items-end">
                  <motion.div
                    initial={reduceMotion ? false : { height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.45 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={cn(
                      'w-full rounded-t-[3px]',
                      i === 5
                        ? 'bg-gradient-to-t from-gold-dark to-gold-light shadow-gold'
                        : 'bg-gradient-to-t from-navy/15 to-navy/5'
                    )}
                  />
                  <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 text-[0.42rem] font-semibold text-ink-faint lg:text-[0.5rem]">
                    {DAYS[i]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column: activity + top items */}
          <div className="flex min-h-0 flex-col gap-1.5 lg:gap-2">
            <motion.div
              {...enter(0.45)}
              className="overflow-hidden rounded-lg border border-line/90 bg-white p-1.5 lg:rounded-xl lg:p-2"
            >
              <p className="text-[0.55rem] font-bold text-ink lg:text-[0.62rem]">
                Live Activity
              </p>
              <div className="mt-1 space-y-1">
                <AnimatePresence mode="popLayout" initial={false}>
                  {feed.slice(0, 2).map((item) => (
                    <motion.div
                      key={item.text}
                      layout={!reduceMotion}
                      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-1.5 rounded-md bg-ivory px-1.5 py-1"
                    >
                      <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-md bg-gold/12 text-gold-dark lg:h-5 lg:w-5">
                        <item.icon size={9} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[0.5rem] font-semibold leading-tight text-ink lg:text-[0.56rem]">
                          {item.text}
                        </span>
                        <span className="block truncate text-[0.44rem] text-ink-faint lg:text-[0.5rem]">
                          {item.meta}
                        </span>
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              {...enter(0.55)}
              className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-line/90 bg-white p-1.5 lg:rounded-xl lg:p-2"
            >
              <p className="text-[0.55rem] font-bold text-ink lg:text-[0.62rem]">
                Top Sellers
              </p>
              <div className="mt-1 space-y-1">
                {TOP_ITEMS.map((item, i) => (
                  <div key={item.code} className="min-w-0">
                    <div className="flex items-baseline justify-between gap-1">
                      <span className="truncate text-[0.5rem] font-semibold text-ink lg:text-[0.56rem]">
                        {item.name}
                      </span>
                      <span className="shrink-0 font-serif text-[0.5rem] font-semibold text-gold-dark lg:text-[0.56rem]">
                        {item.amt}
                      </span>
                    </div>
                    <div className="mt-0.5 h-[3px] overflow-hidden rounded-full bg-ivory-deep">
                      <motion.div
                        initial={reduceMotion ? false : { width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: 0.6 + i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
