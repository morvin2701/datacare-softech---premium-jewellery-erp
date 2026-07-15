'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './ui/Logo';
import Button from './ui/Button';
import { NAV_LINKS } from '../lib/data/site';
import { cn } from '../lib/utils';

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''));

export default function Header() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Live scrollspy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-500 ease-premium',
          scrolled
            ? 'border-b border-line/80 bg-ivory/70 shadow-[0_8px_30px_-12px_rgba(11,18,32,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-ivory/60'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div
          className={cn(
            'section-container flex items-center justify-between transition-[height] duration-500 ease-premium',
            scrolled ? 'h-16' : 'h-20'
          )}
        >
          <a
            href="#top"
            aria-label="Datacare Softech home"
            className="group shrink-0"
          >
            <span className="inline-block transition-transform duration-500 ease-premium group-hover:scale-[1.03]">
              <Logo />
            </span>
          </a>

          <nav
            className="relative hidden items-center rounded-pill border border-line/70 bg-white/50 p-1.5 backdrop-blur lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-pill px-4 py-2 text-sm font-semibold transition-colors duration-300',
                    isActive
                      ? 'text-navy'
                      : 'text-ink-muted hover:text-ink'
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-pill bg-gradient-to-b from-gold-soft to-gold-muted/70 shadow-[inset_0_0_0_1px_rgba(200,162,74,0.45)]"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 380, damping: 32 }
                      }
                    />
                  ) : null}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button as="a" href="#contact" variant="secondary" size="sm">
              Free trial
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="sm"
              iconRight={ArrowUpRight}
            >
              Request a demo
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-ink backdrop-blur transition-colors hover:border-gold hover:text-gold-dark lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className={cn(
            'h-px origin-left bg-gradient-to-r from-gold via-gold-light to-gold-dark transition-opacity duration-500',
            scrolled ? 'opacity-100' : 'opacity-0'
          )}
        />
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            />
            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-3 top-[4.75rem] origin-top rounded-3xl border border-line bg-ivory/95 p-4 shadow-card-hover backdrop-blur-xl"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, i) => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.3 }}
                    className={cn(
                      'flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition-colors',
                      isActive
                        ? 'bg-gold-soft text-navy'
                        : 'text-ink-muted hover:bg-white hover:text-ink'
                    )}
                  >
                    {link.label}
                    <ArrowUpRight
                      size={18}
                      className={isActive ? 'text-gold-dark' : 'text-ink-faint'}
                    />
                  </motion.a>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + NAV_LINKS.length * 0.05, duration: 0.3 }}
                className="mt-4 flex flex-col gap-3 border-t border-line pt-4"
              >
                <Button
                  as="a"
                  href="#contact"
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  Get Free Trial
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  variant="primary"
                  iconRight={ArrowUpRight}
                  onClick={() => setOpen(false)}
                >
                  Request Demo
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
