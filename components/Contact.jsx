import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import DemoForm from './DemoForm';
import { company, fullIndiaAddress } from '@/lib/site';

export default function Contact() {
  return (
    <section id="contact" className="section relative bg-ivory-deep">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">Book a demo</p>
          <h2 className="h2 mt-4">
            Book a free demo of <em className="gold-text">DataCare Next</em>
          </h2>
          <p className="lead mt-5">See the full jewellery cycle with your own workflow. Fill the form, or call / WhatsApp any member of our team.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card p-6 sm:p-9" data-reveal="left">
            <DemoForm />
          </div>

          <div className="flex flex-col gap-4" data-reveal="right">
            <div className="dark-surface rounded-card p-6 text-white shadow-lift">
              <p className="font-display text-xl">Prefer to talk?</p>
              <p className="mt-1 text-sm text-white/60">Pick anyone from our team and call or WhatsApp them directly.</p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <a href="/#about" data-open-contacts="call" className="btn-ghost-dark">
                  <Phone size={17} aria-hidden="true" /> Call
                </a>
                <a href="/#about" data-open-contacts="whatsapp" className="btn bg-[#0F7A40] text-white hover:brightness-110">
                  <MessageCircle size={17} aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>

            <address className="card space-y-4 p-6 not-italic">
              <div className="flex gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{company.name}</p>
                  <p className="text-sm leading-relaxed text-ink-muted">{fullIndiaAddress}</p>
                  <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
                    <Navigation size={14} aria-hidden="true" /> Get directions
                  </a>
                </div>
              </div>
              <div className="flex gap-3 border-t border-line pt-4">
                <MapPin size={19} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{company.legalDubai}</p>
                  <p className="text-sm text-ink-muted">{company.dubai.street}, {company.dubai.city}, UAE</p>
                </div>
              </div>
              <div className="flex gap-3 border-t border-line pt-4">
                <Mail size={19} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="text-sm font-semibold text-ink hover:text-gold-dark">{company.email}</a>
              </div>
              <div className="flex gap-3 border-t border-line pt-4">
                <Clock size={19} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
                <p className="text-sm text-ink-muted">{company.hours} · {company.hoursNote}</p>
              </div>
            </address>

            <div className="overflow-hidden rounded-card border border-line shadow-card">
              <iframe
                title="DataCare Softech office location – Shivam Trade Center, Bopal, Ahmedabad"
                src={company.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale-[30%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
