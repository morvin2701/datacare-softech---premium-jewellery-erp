import { MessageCircle, Phone } from 'lucide-react';

// Sticky Call + WhatsApp bar on phones. Both open the team directory so the
// customer chooses whom to contact.
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-navy/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href="/#about" data-open-contacts="call" className="btn-ghost-dark !min-h-[2.9rem]">
        <Phone size={18} aria-hidden="true" /> Call
      </a>
      <a href="/#about" data-open-contacts="whatsapp" className="btn !min-h-[2.9rem] bg-[#0F7A40] text-white">
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp
      </a>
    </div>
  );
}
