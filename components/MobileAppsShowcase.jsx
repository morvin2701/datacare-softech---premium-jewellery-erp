'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Check, Star, Apple, Play, BookOpen, PiggyBank, Smartphone } from 'lucide-react';
import Card, { IconBadge } from './ui/Card';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';

const phones = [
  { src: '/HeroMobile.PNG', label: 'Accounting App', caption: 'Real-time ledgers & sales' },
  { src: '/HeroMobile.PNG', label: 'E-Catalogue', caption: 'Digital showroom on the go' },
  { src: '/HeroTablet.PNG', label: 'Gold Scheme', caption: 'Savings plans & reminders' },
];

const essentials = [
  'Ledger Reports',
  'Item Wise Stock',
  'Estimate Quotation',
  'Stock Image Upload',
  'Sales Overview',
  'Customer History',
];

const professional = [
  'Party Accounts',
  'WhatsApp Sharing',
  'PDF Reports',
  'Order Management',
  'Advanced Analytics',
  'Multi-location Inventory',
  'Cloud Backup & Sync',
  'API Access',
];

function PhoneMockup({ src, label, caption, featured = false, loadImage = true }) {
  return (
    <div className="group flex flex-col items-center">
      <div
        className={`relative w-full overflow-hidden rounded-[2rem] border-[6px] border-navy bg-navy shadow-card-hover transition-transform duration-500 ease-premium group-hover:-translate-y-2 ${
          featured ? 'max-w-[240px]' : 'max-w-[220px]'
        }`}
      >
        <div className="relative aspect-[9/19.5] bg-navy">
          {loadImage ? (
            <img
              src={src}
              alt={`${label} screen`}
              width={1290}
              height={2796}
              loading={featured ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={featured ? 'high' : 'low'}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <span className="absolute inset-0 animate-pulse bg-navy-light/80" />
          )}
        </div>
      </div>
      <p className="mt-5 text-base font-bold text-ink">{label}</p>
      <p className="mt-1 text-sm text-ink-faint">{caption}</p>
    </div>
  );
}

/**
 * Phones drift at different speeds while the section scrolls — the outer
 * pair floats down while the featured centre phone rises, giving the row
 * gentle depth without leaving the grid.
 */
function PhoneParade() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isNearView = useInView(ref, { once: true, margin: '180px 0px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 95%', 'end 20%'],
  });

  const outerY = useTransform(scrollYProgress, [0, 1], [48, -18]);
  const centerY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <div ref={ref} className="mt-16 grid gap-10 sm:grid-cols-3">
      {phones.map((phone, index) => {
        const isCenter = index === 1;
        return (
          <motion.div
            key={phone.label}
            style={
              reduceMotion ? undefined : { y: isCenter ? centerY : outerY }
            }
          >
            <PhoneMockup {...phone} featured={isCenter} loadImage={isNearView} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function MobileAppsShowcase() {
  return (
    <section id="mobile" className="bg-ivory pb-6 pt-8 md:pb-8 md:pt-10">
      <div className="section-container">
        <SectionHeading
          index="05"
          eyebrow="Mobility & Innovation"
          title="Your business, in your"
          highlight="pocket"
          description="Stay connected to your showroom 24/7. Our suite of mobile apps keeps you in control — whether you are on the floor or on the go."
        />

        <PhoneParade />

        {/* Plan comparison */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="flex h-full flex-col p-8">
              <div className="flex items-center justify-between">
                <IconBadge icon={Smartphone} />
                <span className="rounded-pill border border-line bg-ivory px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink-muted">
                  No Cost
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">Essentials (Free)</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Perfect for small businesses and core accounting needs.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {essentials.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-gold-dark" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-card border-2 border-gold bg-navy p-8 text-white shadow-gold">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
                  <Star size={22} strokeWidth={1.75} />
                </span>
                <span className="rounded-pill bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-navy">
                  Premium
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">Professional (Paid)</h3>
              <p className="mt-2 text-sm text-white/65">
                Advanced features for growing businesses with full management.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {professional.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Companion apps */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="flex h-full items-start gap-5 p-8">
              <IconBadge icon={BookOpen} />
              <div>
                <h3 className="text-lg font-bold text-ink">E-Catalogue</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Impress clients with a sleek, customisable digital catalogue.
                  Replace bulky physical books with high-resolution imagery and
                  instant search.
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="flex h-full items-start gap-5 p-8">
              <IconBadge icon={PiggyBank} />
              <div>
                <h3 className="text-lg font-bold text-ink">Gold Scheme App</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Modernise monthly saving schemes. Customers track payments, view
                  maturity dates, and pay installments online — building trust and
                  transparency.
                </p>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Store buttons */}
        <div className="mt-14 flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-brand text-ink-faint">
            Download available on
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button as="a" href="#contact" variant="primary" icon={Play}>
              Get it on Google Play
            </Button>
            <Button as="a" href="#contact" variant="secondary" icon={Apple}>
              Download on the App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
