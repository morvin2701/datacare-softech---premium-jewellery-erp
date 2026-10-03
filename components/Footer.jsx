import Logo from './Logo';
import { company, fullIndiaAddress } from '@/lib/site';

const quick = [
  ['Features', '#features'],
  ['Solutions', '#solutions'],
  ['Plans', '#plans'],
  ['Why DataCare', '#why-datacare'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
];
const modules = [
  ['Jewellery Billing Software', '#billing'],
  ['Jewellery Accounting Software', '#accounting'],
  ['Barcode & RFID Stock', '#inventory'],
  ['Karigar & Manufacturing', '#manufacturing'],
  ['Gold Scheme & Mobile App', '#mobile-app'],
  ['Hardware', '#hardware'],
];

export default function Footer() {
  const social = Object.entries(company.social);
  return (
    <footer className="dark-surface relative overflow-hidden pb-24 pt-16 text-white md:pb-10">
      <div className="container-x relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              DataCare Next is jewellery software in India for retail, wholesale and manufacturing jewellers — GST &amp; HUID billing,
              stock, karigar, accounts and mobile apps, made in Ahmedabad.
            </p>
            {social.length ? (
              <ul className="mt-5 flex gap-3">
                {social.map(([k, url]) => (
                  <li key={k}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm capitalize text-white/60 hover:text-gold-light">{k}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Quick links</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {quick.map(([l, h]) => (
                <li key={h}><a href={h} className="inline-block py-0.5 transition hover:text-gold-light">{l}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Software</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {modules.map(([l, h]) => (
                <li key={h}><a href={h} className="inline-block py-0.5 transition hover:text-gold-light">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Offices</p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              <span className="font-semibold text-white">India:</span> {fullIndiaAddress}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              <span className="font-semibold text-white">UAE:</span> {company.legalDubai}, {company.dubai.street}, {company.dubai.city}
            </p>
            <p className="mt-3 text-sm text-white/65">
              <a href={`mailto:${company.email}`} className="inline-block py-1.5 hover:text-gold-light">{company.email}</a>
              <br />
              <a href="#about" data-open-contacts="call" className="inline-block py-1.5 hover:text-gold-light">Call / WhatsApp our team →</a>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>DataCare Next – Jewellery Software in India · Ahmedabad · Dubai</p>
        </div>
      </div>
    </footer>
  );
}
