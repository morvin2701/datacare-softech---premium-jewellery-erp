import { Clock, Mail, MessageCircle, Phone } from 'lucide-react';
import { company } from '@/lib/site';

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-navy text-[0.8rem] text-white/70 md:block">
      <div className="container-x flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href="#about" data-open-contacts="call" className="inline-flex items-center gap-2 transition hover:text-gold-light">
            <Phone size={14} className="text-gold" aria-hidden="true" /> Call our sales team
          </a>
          <a href="#about" data-open-contacts="whatsapp" className="inline-flex items-center gap-2 transition hover:text-gold-light">
            <MessageCircle size={14} className="text-gold" aria-hidden="true" /> WhatsApp for a free demo
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 transition hover:text-gold-light">
            <Mail size={14} className="text-gold" aria-hidden="true" /> {company.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Clock size={14} className="text-gold" aria-hidden="true" /> {company.hours}
          </span>
        </div>
      </div>
    </div>
  );
}
