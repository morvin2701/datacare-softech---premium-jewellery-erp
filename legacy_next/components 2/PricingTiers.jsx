'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Diamond, Download, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';
import { productsData, PRODUCT_FILTERS } from '../lib/data/products';
import { cn } from '../lib/utils';

export default function PricingTiers() {
  const [filter, setFilter] = useState('All');
  const reduceMotion = useReducedMotion();

  const visible =
    filter === 'All'
      ? productsData
      : productsData.filter((p) => p.type === filter);

  return (
    <section id="products" className="bg-ivory pb-6 pt-8 md:pb-8 md:pt-10">
      <div className="section-container">
        <SectionHeading
          index="03"
          eyebrow="Enterprise Editions"
          title="Choose your"
          highlight="operational scale"
          description="From single showrooms to complex multi-branch chains — every tier builds on the one before it, so you only pay for the depth you need."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PRODUCT_FILTERS.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              className={cn(
                'rounded-pill px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300',
                filter === type
                  ? 'bg-navy text-white shadow-card'
                  : 'border border-line bg-white text-ink-muted hover:border-gold hover:text-gold-dark'
              )}
            >
              {type}
            </button>
          ))}
        </div>

        <motion.div
          layout={!reduceMotion}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((product) => {
              const isFlagship = product.tier === 'Enterprise';
              return (
                <motion.div
                  layout={!reduceMotion}
                  key={product.id}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    'relative flex flex-col rounded-card p-6 transition-all duration-300 ease-premium hover:-translate-y-1.5',
                    isFlagship
                      ? 'glow-border border border-gold/70 bg-navy text-white shadow-gold'
                      : 'card-surface hover:shadow-card-hover'
                  )}
                >
                  {isFlagship ? (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-pill bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
                      <Diamond size={11} /> {product.badge || 'Ultimate'}
                    </span>
                  ) : null}

                  <div className="border-b border-line/60 pb-4 text-center">
                    <h3
                      className={cn(
                        'text-lg font-bold',
                        isFlagship ? 'text-white' : 'text-ink'
                      )}
                    >
                      {product.name}
                    </h3>
                    <p
                      className={cn(
                        'mt-1 text-[11px] font-semibold uppercase tracking-wide',
                        isFlagship ? 'text-gold' : 'text-ink-faint'
                      )}
                    >
                      {product.tagline}
                    </p>
                  </div>

                  <ul className="mt-5 flex-1 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          'flex items-start gap-2 text-xs leading-relaxed',
                          isFlagship ? 'text-white/75' : 'text-ink-muted'
                        )}
                      >
                        <Check
                          size={14}
                          strokeWidth={3}
                          className="mt-0.5 shrink-0 text-gold-dark"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    as="a"
                    href="#contact"
                    variant={isFlagship ? 'primary' : 'secondary'}
                    size="sm"
                    className="mt-6 w-full"
                    iconRight={ArrowRight}
                  >
                    Request Demo
                  </Button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="/versionlist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-white px-6 py-3 text-sm font-semibold text-ink-muted transition-colors hover:border-gold hover:text-gold-dark"
          >
            <Download size={16} /> Download Complete Feature Matrix (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
