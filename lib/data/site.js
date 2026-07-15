export const WHATSAPP_NUMBER = '919904469007';
export const WHATSAPP_MESSAGE =
  "Hello, I'd like to connect with the Datacare Softech team about your Jewellery ERP.";

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const COMPANY = {
  name: 'Datacare Softech',
  email: 'datacare.india@yahoo.com',
  indiaAddress:
    '1019, STC (Shivam Trade Center), Beside One World West, Bopal, Ahmedabad, Gujarat 380058',
  dubaiAddress: 'Datacare Softech FZCO, Dubai Silicon Oasis, DDP, Dubai, UAE',
  hours: {
    weekdays: 'Monday to Saturday: 10:00 AM to 7:00 PM',
    sunday: 'Sunday: Closed',
  },
};

export const NAV_LINKS = [
  { label: 'Platform', href: '#features' },
  { label: 'Solutions', href: '#products' },
  { label: 'Integration', href: '#hardware' },
  { label: 'Company', href: '#team' },
];

export const TRUST_BADGES = ['SOC-2 Compliant', 'AI Analytics', 'Multi-Store'];
