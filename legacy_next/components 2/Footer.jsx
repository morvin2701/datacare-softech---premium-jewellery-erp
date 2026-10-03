import { MapPin, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './ui/Logo';
import { COMPANY, NAV_LINKS, getWhatsAppUrl } from '../lib/data/site';

const solutions = [
  'Retail ERP',
  'Wholesale Management',
  'Manufacturing Units',
  'RFID Ecosystems',
  'Mobile Apps',
];

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-line bg-navy text-white/70">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Pioneering the digital transformation of the jewellery industry with
              precision software and integrated hardware. Trusted across India &amp;
              the UAE.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-brand text-white/45">
              Solutions
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {solutions.map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="transition-colors hover:text-gold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-brand text-white/45">
              Company
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Talk to Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-brand text-white/45">
              Contact HQ
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span className="leading-relaxed">{COMPANY.indiaAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gold" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>{COMPANY.hours.weekdays}</p>
        </div>
      </div>
    </footer>
  );
}
