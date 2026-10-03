import Image from 'next/image';
import { ArrowRight, BadgeCheck, ChevronRight, Check, MapPin, MessageCircle, Plus } from 'lucide-react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import MobileBar from './MobileBar';
import ContactDialog from './ContactDialog';
import Effects from './Effects';
import Schema from './Schema';
import Contact from './Contact';
import Icon from './Icon';
import { BillingVisual, LedgerVisual } from './Visuals';
import { editionCards, featureGroups } from '@/lib/content';
import { landingBySlug } from '@/lib/landing';
import { states } from '@/lib/coverage';
import { SITE_URL, company } from '@/lib/site';

const photoPanel = 'relative flex min-h-[22rem] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 shadow-lift';

function Visual({ kind }) {
  if (kind === 'billing') return <BillingVisual />;
  if (kind === 'ledger') return <LedgerVisual />;
  if (kind === 'rfid')
    return (
      <div className={`${photoPanel} bg-[#efe9df]`}>
        <Image src="/images/rfid-solution-kit.webp" alt="DataCare RFID solution – Zebra handheld reader, RFID-tagged jewellery and the DataCare RFID app" width={1448} height={1086} sizes="(max-width: 1024px) 90vw, 640px" className="w-full object-contain" priority />
      </div>
    );
  return (
    <div className={`${photoPanel} dark-surface items-end !pl-6 !pt-10 sm:!pl-10 sm:!pt-14`}>
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative w-full overflow-hidden rounded-tl-2xl border-l border-t border-white/20 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-ivory px-4 py-2.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[0.7rem] text-ink-faint ring-1 ring-line">DataCare Next — Jewellery ERP</span>
        </div>
        <Image src="/images/datacare-next-jewellery-software-desktop.webp" alt="DataCare Next jewellery software main screen" width={1600} height={850} sizes="(max-width: 1024px) 90vw, 640px" className="w-full" priority />
      </div>
    </div>
  );
}

export default function LandingPage({ slug }) {
  const page = landingBySlug[slug];
  const url = `${SITE_URL}/${slug}/`;
  const group = featureGroups[page.featureGroup];
  const editions = editionCards.filter((e) => page.editions.includes(e.name));
  const related = page.related.map((s) => landingBySlug[s]).filter(Boolean);
  const state = page.city ? states.find((s) => s.name === page.city.state) : null;

  return (
    <>
      <Schema faqs={page.faqs} page={{ url, title: page.metaTitle, description: page.metaDescription, breadcrumb: page.breadcrumb }} />
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="dark-surface relative overflow-hidden text-white">
          <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="container-x relative py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/55">
              <a href="/" className="hover:text-gold-light">Home</a>
              <ChevronRight size={12} aria-hidden="true" />
              <span className="text-white/80">{page.breadcrumb}</span>
            </nav>
            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
              <div>
                <p className="eyebrow !text-gold-light hero-in">{page.eyebrow}</p>
                <h1 className="hero-rise mt-4 font-display text-[2.3rem] font-medium leading-[1.06] tracking-tight sm:text-[3rem] lg:text-[3.4rem]">{page.h1}</h1>
                <p className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg" style={{ '--d': '80ms' }}>{page.intro}</p>
                <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ '--d': '200ms' }}>
                  <a href="#contact" className="btn-gold !min-h-[3.25rem] px-7 text-[0.95rem]">
                    Book Free Demo <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <a href="/#about" data-open-contacts="whatsapp" className="btn-ghost-dark !min-h-[3.25rem] px-7 text-[0.95rem]">
                    <MessageCircle size={18} className="text-[#3ddc84]" aria-hidden="true" /> WhatsApp Us
                  </a>
                </div>
                <ul className="hero-in mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75" style={{ '--d': '300ms' }}>
                  {page.proof.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <BadgeCheck size={18} className="text-gold" aria-hidden="true" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hero-in flex" style={{ '--d': '150ms' }}>
                <Visual kind={page.visual} />
              </div>
            </div>
          </div>
        </section>

        {/* Body copy + highlights */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center" data-reveal>
              <p className="eyebrow justify-center">In detail</p>
              <h2 className="h2 mt-4">{page.bodyTitle}</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-[1.02rem] leading-relaxed text-ink-muted md:grid-cols-2" data-reveal>
              {page.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <h2 className="h2 mt-20 text-center" data-reveal>{page.highlightsTitle}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {page.highlights.map((h, i) => (
                <article key={h.title} className="card spot group p-6 hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${(i % 3) * 80}ms` }}>
                  <span className="icon-chip transition duration-500 group-hover:bg-gold group-hover:text-navy">
                    <Icon name={h.icon} />
                  </span>
                  <h3 className="mt-4 text-[1.05rem] font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{h.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature ticks from the matching module */}
        <section className="section bg-ivory-deep">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center" data-reveal>
              <p className="eyebrow justify-center">{group.title}</p>
              <h2 className="h2 mt-4">Everything in the {group.title.toLowerCase()} module</h2>
              <p className="lead mt-4">
                {group.items.length} features from the DataCare Next feature list. See all 36 features on the{' '}
                <a href="/#features" className="font-semibold text-gold-dark underline-offset-4 hover:underline">home page</a>.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((f, i) => (
                <li key={f.title} className="card p-5" data-reveal style={{ '--delay': `${(i % 4) * 60}ms` }}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-soft text-gold-dark">
                      <Icon name={f.icon} size={17} />
                    </span>
                    <h3 className="text-sm font-semibold leading-snug text-ink">{f.title}</h3>
                  </div>
                  <p className="mt-2.5 text-[0.82rem] leading-relaxed text-ink-muted">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* City block */}
        {page.city && state ? (
          <section className="dark-surface section relative overflow-hidden text-white">
            <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="container-x relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div data-reveal="left">
                <p className="eyebrow !text-gold-light">Around {page.city.name}</p>
                <h2 className="h2 mt-4 !text-white">
                  {state.count.toLocaleString('en-IN')}+ jewellers in <span className="gold-text">{state.name}</span> run DataCare Next
                </h2>
                <p className="mt-5 leading-relaxed text-white/65">
                  We serve jewellers in {page.city.name} and the towns around it. Pick any member of our team to call or WhatsApp — every one of them handles sales and service.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="/#about" data-open-contacts="call" className="btn-gold">Call our team</a>
                  <a href="/#locations" className="btn-ghost-dark">See every city on the map</a>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2.5" data-reveal="right">
                {page.city.nearby.map((c, i) => (
                  <li key={c} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm ${i === 0 ? 'bg-gold font-semibold text-navy' : 'border border-white/15 bg-white/[0.04] text-white/85'}`}>
                    <MapPin size={14} className={i === 0 ? '' : 'text-gold'} aria-hidden="true" /> {c}
                  </li>
                ))}
                <li className="inline-flex items-center rounded-full border border-dashed border-white/20 px-4 py-2 text-sm text-white/55">
                  + {Math.max(0, state.cities.length - page.city.nearby.length)} more cities in {state.name}
                </li>
              </ul>
            </div>
          </section>
        ) : null}

        {/* Editions */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center" data-reveal>
              <p className="eyebrow justify-center">Editions</p>
              <h2 className="h2 mt-4">Available in these DataCare Next editions</h2>
              <p className="lead mt-4">{page.editionsNote}</p>
            </div>
            <div className={`mx-auto mt-10 grid gap-5 ${editions.length === 2 ? 'max-w-3xl sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
              {editions.map((e, i) => (
                <article key={e.name} className={`flex flex-col rounded-card border p-6 text-center ${e.flagship ? 'border-gold/70 bg-navy text-white shadow-gold' : 'card'}`} data-reveal style={{ '--delay': `${i * 80}ms` }}>
                  <h3 className={`font-display text-2xl font-semibold ${e.flagship ? 'text-white' : 'text-ink'}`}>{e.name}</h3>
                  <p className={`mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${e.flagship ? 'text-gold-light' : 'text-ink-faint'}`}>{e.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 text-left">
                    {e.features.slice(0, 4).map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${e.flagship ? 'text-white/85' : 'text-ink-muted'}`}>
                        <span className={`ico ico-check mt-0.5 shrink-0 text-[15px] ${e.flagship ? 'text-gold-light' : 'text-gold-dark'}`} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center" data-reveal>
              <a href="/#plans" className="btn-ghost">
                Compare all 7 editions <ArrowRight size={16} aria-hidden="true" />
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-ivory-deep">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center" data-reveal>
              <p className="eyebrow justify-center">FAQ</p>
              <h2 className="h2 mt-4">Questions about {page.breadcrumb.toLowerCase()}</h2>
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {page.faqs.map((f, i) => (
                <details key={f.q} name="landing-faq" open={i === 0} className="card group overflow-hidden open:border-gold/50 open:shadow-lift" data-reveal>
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-6 py-5">
                    <h3 className="text-[1.02rem] font-semibold leading-snug text-ink">{f.q}</h3>
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-dark transition duration-500 group-open:rotate-45 group-open:bg-gold group-open:text-navy">
                      <Plus size={16} aria-hidden="true" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 leading-relaxed text-ink-muted">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="section">
          <div className="container-x">
            <h2 className="h2 text-center" data-reveal>Also from DataCare Softech</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r, i) => (
                <a key={r.slug} href={`/${r.slug}/`} className="card spot group flex items-center justify-between gap-4 p-6 hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--delay': `${i * 80}ms` }}>
                  <span>
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">{r.eyebrow}</span>
                    <span className="mt-1 block font-display text-xl text-ink">{r.breadcrumb}</span>
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-gold-dark transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-muted" data-reveal>
              {[['All 36 features', '/#features'], ['Plans & editions', '/#plans'], ['What’s new', '/#launches'], ['Our team', '/#about']].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="inline-flex items-center gap-1.5 font-semibold text-ink transition hover:text-gold-dark">
                    <Check size={14} strokeWidth={3} className="text-gold-dark" aria-hidden="true" /> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <ContactDialog />
      <Effects />
    </>
  );
}

export function landingMetadata(slug) {
  const page = landingBySlug[slug];
  const url = `${SITE_URL}/${slug}/`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url,
      siteName: company.name,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: '/og-datacare-next.png', width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.metaDescription, images: ['/og-datacare-next.png'] },
  };
}
