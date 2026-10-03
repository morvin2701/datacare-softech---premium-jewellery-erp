import { Building2, Globe2, MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import Avatar from './Avatar';
import Shuffle from './Shuffle';
import { company, dubaiTeam, founder, teamLeaders, teamMembers, teamSize, telHref, waHref } from '@/lib/site';

function ContactIcons({ person, dark }) {
  if (!person.phone) return null;
  const base = `inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${dark ? 'border-white/15 text-white hover:border-gold' : 'border-line text-ink hover:border-gold hover:text-gold-dark'}`;
  return (
    <div className="flex gap-2">
      <a href={telHref(person.phone)} data-person={person.name} className={base} aria-label={`Call ${person.name} on ${person.phone}`} title={person.phone}>
        <Phone size={15} aria-hidden="true" />
      </a>
      <a href={waHref(person.phone)} target="_blank" rel="noopener noreferrer" data-person={person.name} className={`${base} !text-[#0F7A40]`} aria-label={`WhatsApp ${person.name}`}>
        <MessageCircle size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section relative bg-ivory-deep">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
          <div data-reveal="left">
            <p className="eyebrow">About us</p>
            <h2 className="h2 mt-4">
              About <em className="gold-text">DataCare Softech</em>
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">
              DataCare Softech was founded by <strong className="font-semibold text-ink">{founder.name}</strong> with one goal: to make
              jewellery business easy and fast. For more than {company.stats.years} years we have built software only for jewellers —
              retailers, wholesalers, Jadtar and antique manufacturers, and imitation jewellery businesses.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Today DataCare Next is used by over {company.stats.customers.toLocaleString('en-IN')} customers. Our {teamSize}-member sales and
              service team works from our head office in Bopal, Ahmedabad and our branch in Dubai, so every customer gets quick, personal
              support from people who understand gold, silver and the jewellery trade.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <Building2 size={20} className="text-gold-dark" aria-hidden="true" />
                <p className="mt-3 font-semibold text-ink">India – Head Office</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {company.india.street}, {company.india.city}, {company.india.region} {company.india.postalCode}
                </p>
              </div>
              <div className="card p-5">
                <Globe2 size={20} className="text-gold-dark" aria-hidden="true" />
                <p className="mt-3 font-semibold text-ink">UAE – {company.legalDubai}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {company.dubai.street}, {company.dubai.city}, United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          <div className="dark-surface relative overflow-hidden rounded-[1.75rem] text-white shadow-lift lg:self-stretch" data-reveal="right">
            <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative grid h-full sm:grid-cols-[1fr_minmax(13rem,17rem)]">
              {/* Copy */}
              <div className="flex flex-col justify-between p-8 sm:p-10">
                <div>
                  <p className="eyebrow !text-gold-light">{founder.role}</p>
                  <h3 className="mt-3 font-display text-4xl leading-tight">{founder.name}</h3>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Our promise</p>
                  <p className="mt-2 font-display text-2xl leading-snug text-white/90">
                    Make your jewellery business <em className="gold-text">easy and fast.</em>
                  </p>
                </div>
                <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {[
                    [`${company.stats.years}+`, 'Years'],
                    [`${(company.stats.customers / 1000).toFixed(0)}K+`, 'Customers'],
                    ['2', 'Countries'],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <dd className="font-display text-3xl text-gold-light">{v}</dd>
                      <dt className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-white/50">{l}</dt>
                    </div>
                  ))}
                </dl>
              </div>
              {/* Portrait */}
              <div className="relative min-h-[20rem] sm:min-h-0">
                <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-[85%] w-[85%] -translate-x-1/2 rounded-full bg-gold/25 blur-[70px]" />
                <div aria-hidden="true" className="absolute inset-x-6 bottom-0 top-10 rounded-t-full border border-gold/30" />
                <Image
                  src="/images/sanjay-vekariya-founder.webp"
                  alt={`${founder.name}, ${founder.role} of DataCare Softech`}
                  width={540}
                  height={651}
                  sizes="(max-width: 640px) 80vw, 272px"
                  className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,.6)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="eyebrow justify-center">Our team</p>
            <h3 className="mt-4 font-display text-[2rem] leading-tight text-ink sm:text-[2.4rem]">Choose whom you’d like to talk to</h3>
            <p className="lead mt-4">Every member of our team handles sales and service. Call or WhatsApp anyone directly.</p>
          </div>

          <p className="group-label mb-5 mt-12">Team leaders</p>
          <ul data-shuffle className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {teamLeaders.map((p, i) => (
              <li key={p.name} className="card spot group flex flex-col items-center p-6 text-center hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${i * 70}ms` }}>
                <Avatar person={p} size={96} className="transition duration-500 group-hover:scale-105" />
                <p className="mt-4 font-semibold text-ink">{p.name}</p>
                <p className="text-xs text-ink-faint">{p.role}</p>
                <p className="mb-4 mt-1 text-xs tabular-nums text-ink-muted">{p.phone}</p>
                <div className="mt-auto">
                  <ContactIcons person={p} />
                </div>
              </li>
            ))}
          </ul>

          <p className="group-label mb-5 mt-12">Dubai – {company.legalDubai}</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {dubaiTeam.map((p, i) => (
              <li key={p.name} className="dark-surface spot flex items-center gap-4 rounded-card p-5 text-white shadow-card" data-reveal style={{ '--delay': `${i * 90}ms` }}>
                <Avatar person={p} size={72} />
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="text-xs text-white/55">{p.role}</p>
                  <p className="mt-0.5 text-xs tabular-nums text-gold-light">{p.phone}</p>
                </div>
                <ContactIcons person={p} dark />
              </li>
            ))}
          </ul>

          <p className="group-label mb-5 mt-12">Sales &amp; service team – India</p>
          <ul data-shuffle className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((p, i) => (
              <li key={p.name} className="card spot group flex items-center gap-4 p-4 hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${(i % 4) * 60}ms` }}>
                <Avatar person={p} size={72} className="transition duration-500 group-hover:scale-105" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[1.02rem] font-semibold text-ink">{p.name}</p>
                  <p className="truncate text-xs text-ink-faint">{p.role}</p>
                  {p.phone ? <p className="mt-0.5 text-xs tabular-nums text-ink-muted">{p.phone}</p> : null}
                  <div className="mt-2.5">
                    <ContactIcons person={p} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Shuffle />
    </section>
  );
}
