'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Crown,
  GraduationCap,
  Headset,
  MessageCircle,
  Calculator,
  Users,
} from 'lucide-react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';
import {
  founder,
  teamLeaders,
  teamDepartments,
  totalTeamSize,
} from '../lib/data/team';
import { getWhatsAppUrl, COMPANY } from '../lib/data/site';

const teamStats = [
  { value: '15+', label: 'Years in jewellery tech' },
  { value: '2', label: 'Countries served' },
  { value: '24/7', label: 'Dedicated support' },
];

const departmentIcons = {
  development: Code2,
  implementation: GraduationCap,
  support: Headset,
  operations: Calculator,
};

const specialistCount = teamDepartments.reduce((sum, dept) => sum + dept.count, 0);
const maxDeptCount = Math.max(...teamDepartments.map((dept) => dept.count));

function initialsOf(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');
}

/** Tier marker between org levels: connector line + numbered label. */
function TierMarker({ index, label, sub }) {
  return (
    <Reveal className="flex flex-col items-center pt-12 pb-8 text-center">
      <span aria-hidden="true" className="h-10 w-px bg-gradient-to-b from-transparent via-gold/50 to-gold/70" />
      <span
        aria-hidden="true"
        className="mt-1 h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(200,162,74,0.15)]"
      />
      <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-dark">
        Tier 0{index}
      </p>
      <h3 className="mt-1.5 font-display text-xl font-bold text-ink sm:text-2xl">{label}</h3>
      <p className="mt-1 text-sm text-ink-faint">{sub}</p>
    </Reveal>
  );
}

function LeaderCard({ lead, index, reduceMotion }) {
  return (
    <Reveal delay={(index % 4) * 0.08}>
      <motion.article
        whileHover={reduceMotion ? undefined : { y: -6 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="group relative h-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-gold/35 via-line/70 to-line p-px shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[1.2rem] bg-white">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy">
            {lead.image ? (
              <Image
                src={lead.image}
                alt={`${lead.name}, ${lead.role}`}
                fill
                sizes="(max-width: 768px) 50vw, 22vw"
                className="object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
              />
            ) : (
              <div className="ambient-navy absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-6xl font-medium italic text-gold/70">
                  {initialsOf(lead.name)}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />

            <span className="absolute right-4 top-4 font-display text-sm font-bold text-white/30 transition-colors duration-300 group-hover:text-gold/60">
              {lead.id}
            </span>

            <div className="absolute inset-x-0 bottom-0 p-4">
              <h4 className="text-base font-bold text-white">{lead.name}</h4>
              <p className="mt-0.5 text-[0.7rem] font-medium leading-snug text-white/65">
                {lead.role}
              </p>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team" className="grain relative overflow-hidden bg-ivory pb-6 pt-8 md:pb-8 md:pt-10">
      {/* Soft ambient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,162,74,0.07),transparent_70%)]"
      />

      <div className="section-container relative">
        <SectionHeading
          index="07"
          eyebrow="Our Company"
          title="The people behind"
          highlight="Datacare Softech"
          description={`A ${totalTeamSize}-strong team transforming the jewellery industry across India and the UAE — led by experience, driven by service.`}
        />

        {/* ── Tier 1 · Leadership ─────────────────────────────── */}
        <TierMarker index={1} label="Leadership" sub="Vision and direction" />

        <Reveal>
          <div className="rounded-[1.75rem] bg-gradient-to-br from-gold/40 via-line/80 to-line p-px shadow-card-hover">
            <div className="overflow-hidden rounded-[1.7rem] bg-white">
              <div className="grid items-stretch gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Portrait */}
                <div className="relative min-h-[22rem] bg-navy lg:min-h-[26rem]">
                  <Image
                    src={founder.image}
                    alt={`${founder.name}, ${founder.role}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy/5 lg:to-navy/30" />

                  <span className="absolute left-5 top-5 font-serif text-5xl font-medium italic text-white/20">
                    {founder.id}
                  </span>
                </div>

                {/* Copy */}
                <div className="flex flex-col justify-center px-7 py-10 lg:px-12 lg:py-14">
                  <span className="eyebrow">
                    <Crown size={14} className="text-gold" />
                    Founder &amp; Owner
                  </span>

                  <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                    {founder.name}
                  </h3>
                  <p className="mt-2 font-serif text-lg italic text-gold-dark">
                    {founder.role}
                  </p>

                  <div className="mt-6 h-px w-16 hairline-gold" aria-hidden="true" />

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted">
                    {founder.bio}
                  </p>

                  <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-line/80 pt-6">
                    {teamStats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="sr-only">{stat.label}</dt>
                        <dd className="font-serif text-2xl font-semibold text-ink">
                          {stat.value}
                        </dd>
                        <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-wide text-ink-faint">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Tier 2 · Team leaders ───────────────────────────── */}
        <TierMarker
          index={2}
          label="Team leaders"
          sub={`${teamLeaders.length} leaders across sales, onboarding & customer success`}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamLeaders.map((lead, index) => (
            <LeaderCard key={lead.id} lead={lead} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>

        {/* ── Tier 3 · The wider team ─────────────────────────── */}
        <TierMarker
          index={3}
          label="The wider team"
          sub="Specialists behind every rollout and support call"
        />

        <Reveal>
          <div className="ambient-navy relative overflow-hidden rounded-[1.75rem] border border-navy-line">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px]"
            />

            <div className="relative grid gap-10 px-7 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12 lg:py-14">
              {/* Collective intro */}
              <div className="flex flex-col justify-center">
                <span className="eyebrow text-gold/80">
                  <Users size={14} className="text-gold" />
                  Behind the scenes
                </span>

                <p className="mt-6 font-display text-6xl font-bold leading-none text-white sm:text-7xl">
                  {specialistCount}+
                </p>
                <p className="mt-3 font-serif text-lg italic text-gold">
                  dedicated specialists
                </p>

                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                  Developers, trainers, support engineers, and operations staff who
                  build the product, deploy it in your store, and stay on the line
                  after go-live.
                </p>

                {/* Avatar cluster */}
                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-3">
                    {teamDepartments.map((dept) => {
                      const Icon = departmentIcons[dept.key] ?? Users;
                      return (
                        <span
                          key={dept.key}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-navy-light text-gold shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
                        >
                          <Icon size={17} strokeWidth={1.9} />
                        </span>
                      );
                    })}
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-xs font-bold text-white/80 shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
                      +{specialistCount - teamDepartments.length}
                    </span>
                  </div>
                  <span className="ml-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/40">
                    One team, four crafts
                  </span>
                </div>
              </div>

              {/* Department breakdown */}
              <div className="flex flex-col justify-center gap-3.5">
                {teamDepartments.map((dept) => {
                  const Icon = departmentIcons[dept.key] ?? Users;
                  return (
                    <div
                      key={dept.key}
                      className="group rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-gold/30"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                            <Icon size={17} strokeWidth={1.9} />
                          </span>
                          <p className="text-sm font-semibold text-white/85">{dept.label}</p>
                        </div>
                        <p className="font-serif text-xl font-semibold text-gold">
                          {dept.count}
                        </p>
                      </div>
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold"
                          initial={reduceMotion ? false : { width: 0 }}
                          whileInView={{ width: `${(dept.count / maxDeptCount) * 100}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA band */}
        <Reveal className="mt-14">
          <div className="ambient-navy relative overflow-hidden rounded-[1.5rem] border border-navy-line">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            />

            <div className="relative flex flex-col items-center gap-8 px-8 py-10 text-center lg:flex-row lg:justify-between lg:px-12 lg:py-12 lg:text-left">
              <div className="max-w-xl">
                <p className="eyebrow text-gold/80">
                  <span className="h-px w-5 bg-gold/60" aria-hidden="true" />
                  Get in touch
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  Talk to our{' '}
                  <span className="font-serif font-medium italic text-shimmer-gold">
                    team
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                  One central line for demos, support, and partnerships — message
                  our WhatsApp Business team and we&apos;ll route you to the right
                  expert.
                </p>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  as="a"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={MessageCircle}
                >
                  WhatsApp Us
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  variant="secondaryDark"
                  iconRight={ArrowRight}
                >
                  Contact Form
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-ink-faint">
          Prefer email? Reach us at{' '}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold text-link transition-colors hover:text-gold-dark"
          >
            {COMPANY.email}
          </a>
        </p>
      </div>
    </section>
  );
}
