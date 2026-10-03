'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { journeySteps } from '../lib/data/journey';
import { getIcon } from '../lib/icons';

/**
 * Scroll-driven onboarding timeline. A gold progress line draws itself as
 * the section scrolls through the viewport (horizontal on desktop, vertical
 * on mobile) while each step lights up in sequence.
 */
export default function OnboardingJourney() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 80%', 'end 45%'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const stepAnim = (index) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: {
            duration: 0.6,
            delay: index * 0.14,
            ease: [0.16, 1, 0.3, 1],
          },
        };

  return (
    <section id="journey" className="overflow-hidden bg-ivory-deep pb-6 pt-8 md:pb-8 md:pt-10">
      <div className="section-container">
        <SectionHeading
          index="04"
          eyebrow="Your Journey With Us"
          title="From discovery to"
          highlight="go-live"
          description="We don't just sell software — we partner with you for success. Our proven onboarding methodology ensures rapid value realisation."
        />

        <div ref={trackRef} className="relative mt-16">
          {/* Horizontal track (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-9 hidden h-px w-full bg-line md:block"
          />
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { scaleX: progress }}
            className="absolute left-0 top-9 hidden h-[2px] w-full origin-left bg-gradient-to-r from-gold-dark via-gold to-gold-light shadow-gold md:block"
          />

          {/* Vertical track (mobile) */}
          <div
            aria-hidden="true"
            className="absolute left-9 top-0 h-full w-px bg-line md:hidden"
          />
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { scaleY: progress }}
            className="absolute left-9 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-gold-dark via-gold to-gold-light md:hidden"
          />

          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {journeySteps.map((step, index) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.li
                  key={step.id}
                  {...stepAnim(index)}
                  className="group relative flex gap-5 pl-1 md:flex-col md:items-center md:gap-0 md:pl-0 md:text-center"
                >
                  <div className="relative z-10 mb-0 shrink-0 md:mb-6">
                    <div className="relative inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-line bg-white p-1 shadow-card transition-all duration-500 ease-premium group-hover:-translate-y-1 group-hover:border-gold/60 group-hover:shadow-gold-lg">
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold-dark ring-1 ring-gold/20 transition-all duration-500 ease-premium group-hover:bg-gold/20">
                        <Icon
                          size={26}
                          strokeWidth={1.75}
                          className="transition-transform duration-500 ease-premium group-hover:scale-110"
                        />
                      </span>
                      <motion.span
                        initial={reduceMotion ? false : { scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{
                          type: 'spring',
                          stiffness: 320,
                          damping: 18,
                          delay: 0.25 + index * 0.14,
                        }}
                        className="absolute -right-1 -top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold"
                      >
                        {step.id}
                      </motion.span>
                    </div>
                  </div>
                  <div className="pt-2 md:pt-0">
                    <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                      {step.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
