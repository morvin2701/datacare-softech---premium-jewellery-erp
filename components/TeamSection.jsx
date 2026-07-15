'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Crown, MessageCircle, ArrowRight, Users } from 'lucide-react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';
import { founder, departmentLeads } from '../lib/data/team';
import { getWhatsAppUrl, COMPANY } from '../lib/data/site';

const teamStats = [
  { value: '15+', label: 'Years in jewellery tech' },
  { value: '2', label: 'Countries served' },
  { value: '24/7', label: 'Dedicated support' },
];

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
          description="A dedicated team transforming the jewellery industry across India and the UAE — led by experience, driven by service."
        />

        {/* Founder feature */}
        <Reveal className="mt-16">
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

                  {/* Floating index */}
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

                  {/* Inline credibility stats */}
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

        {/* Department leads */}
        <div className="mt-14">
          <Reveal className="mb-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold-dark ring-1 ring-gold/20">
                <Users size={18} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Department leads</p>
                <p className="text-xs text-ink-faint">
                  Sales, onboarding &amp; customer success
                </p>
              </div>
            </div>
            <span className="hidden font-serif text-sm italic text-gold-dark sm:block">
              {departmentLeads.length} experts
            </span>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departmentLeads.map((lead, index) => (
              <Reveal key={lead.id} delay={(index % 4) * 0.08}>
                <motion.article
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-gold/35 via-line/70 to-line p-px shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-[1.2rem] bg-white">
                    {/* Photo */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                      <Image
                        src={lead.image}
                        alt={`${lead.name}, ${lead.role}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 22vw"
                        className="object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />

                      {/* Index numeral */}
                      <span className="absolute right-4 top-4 font-display text-sm font-bold text-white/30 transition-colors duration-300 group-hover:text-gold/60">
                        {lead.id}
                      </span>

                      {/* Name overlay on image */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <h4 className="text-base font-bold text-white">
                          {lead.name}
                        </h4>
                        <p className="mt-0.5 text-[0.7rem] font-medium leading-snug text-white/65">
                          {lead.role}
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <Reveal className="mt-14">
          <div className="ambient-navy relative overflow-hidden rounded-[1.5rem] border border-navy-line">
            {/* Decorative gold line */}
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
