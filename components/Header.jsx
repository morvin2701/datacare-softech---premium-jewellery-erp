'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { nav } from '@/lib/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the menu item for the section in view.
    const ids = nav.map((n) => n.href.split('#')[1]);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const light = scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        light ? 'border-b border-line/80 bg-ivory/85 shadow-card backdrop-blur-xl' : 'border-b border-white/5 bg-navy/90 backdrop-blur-xl'
      }`}
    >
      <div className="scroll-progress absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-gold-dark via-gold-light to-gold" aria-hidden="true" />
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
        <Logo dark={!light} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = active === item.href.split('#')[1];
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      light ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'
                    } ${isActive ? (light ? '!text-ink' : '!text-white') : ''}`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-gold hidden !min-h-[2.6rem] sm:inline-flex">
            Book Free Demo <ArrowRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              light ? 'border-line text-ink' : 'border-white/20 text-white'
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] origin-top bg-navy px-4 pb-10 pt-6 transition duration-500 ease-premium lg:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + i * 40}ms` : '0ms' }}
                  className={`flex items-center justify-between py-4 font-display text-2xl text-white transition duration-500 ${
                    open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                >
                  {item.label} <ArrowRight size={18} className="text-gold" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-8 w-full">
          Book Free Demo
        </a>
      </div>
    </header>
  );
}
