// Single source of truth for every company fact shown on the site and in the
// schema. Change a number here and it updates everywhere — never hard-code
// these values inside components.

export const SITE_URL = 'https://www.datacaresoftech.com';

export const company = {
  name: 'DataCare Softech',
  product: 'DataCare Next',
  legalDubai: 'Datacare Softech FZCO',
  founder: 'Sanjay Vekariya',
  email: 'datacare.india@yahoo.com', // TODO: switch to sales@datacaresoftech.com once the mailbox exists
  hours: 'Mon–Sat, 10:00 AM – 7:00 PM',
  hoursNote: 'Sunday closed',
  stats: {
    years: 17,
    customers: 7000,
    // Google Business Profile rating — re-check before every release.
    googleRating: 4.8,
    googleReviews: 252,
  },
  india: {
    label: 'Head Office – Ahmedabad',
    street: '1019, STC (Shivam Trade Center), Beside One World West, Nr. Vakil Saheb Bridge, S. P. Ring Road, Bopal',
    city: 'Ahmedabad',
    region: 'Gujarat',
    postalCode: '380058',
    country: 'IN',
    geo: { lat: 23.0225, lng: 72.4714 },
  },
  dubai: {
    label: 'Datacare Softech FZCO – Dubai',
    street: 'Dubai Silicon Oasis, DDP',
    city: 'Dubai',
    country: 'AE',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=DataCare+Softech+Shivam+Trade+Center+Bopal+Ahmedabad',
  mapsEmbed:
    'https://www.google.com/maps?q=Shivam+Trade+Center,+Bopal,+Ahmedabad+380058&output=embed',
  reviewsUrl: 'https://www.google.com/search?q=DataCare+Softech+Bopal+Ahmedabad+reviews',
  // Add the real profile URLs here; they feed the footer and Organization schema.
  social: {
    // facebook: 'https://www.facebook.com/…',
    // instagram: 'https://www.instagram.com/…',
    // youtube: 'https://www.youtube.com/@…',
    // linkedin: 'https://www.linkedin.com/company/…',
  },
  // Play Store / App Store links for the owner + gold scheme apps.
  apps: {
    // android: 'https://play.google.com/store/apps/details?id=…',
    // ios: 'https://apps.apple.com/app/…',
  },
};

export const fullIndiaAddress = `${company.india.street}, ${company.india.city}, ${company.india.region} ${company.india.postalCode}`;

// ---------------------------------------------------------------------------
// Team. Customers pick whom to call — there is deliberately no single "main"
// sales number. `photo` is optional: drop a file in /public/team and set it
// (e.g. '/team/hemal-soni.webp'); otherwise a monogram is shown.
// ---------------------------------------------------------------------------

export const founder = {
  name: 'Sanjay Vekariya',
  role: 'Owner & Founder',
  photo: '/team/sanjay-vekariya.webp',
  phone: null,
};

export const teamLeaders = [
  { name: 'Hemal Soni', photo: '/team/hemal-soni.webp', role: 'Team Leader – Sales', phone: '+91 99044 69007' },
  { name: 'Vishal Gundalia', photo: '/team/vishal-gundalia.webp', role: 'Team Leader – Sales', phone: '+91 99980 49429' },
  { name: 'Vikas Barvadiya', photo: '/team/vikas-barvadiya.webp', role: 'Team Leader – Sales', phone: '+91 87581 11027' },
  { name: 'Devendra Dobariya', photo: '/team/devendra-dobariya.webp', role: 'Team Leader – Sales', phone: '+91 91733 90193' },
  { name: 'Ajay Kambaliya', photo: '/team/ajay-kambaliya.webp', role: 'Team Leader – Sales', phone: '+91 70458 54094' },
];

export const dubaiTeam = [
  { name: 'Morvin Vekariya', photo: '/team/morvin-vekariya.webp', role: 'Sales & Support – Dubai', phone: '+971 55 783 2714' },
  { name: 'Shreyash Thummar', photo: '/team/shreyash-thummar.webp', role: 'Sales & Support – Dubai', phone: '+971 55 176 0454' },
];

export const teamMembers = [
  { name: 'Kunarth Soni', photo: '/team/kunarth-soni.webp', role: 'Sales & Technical Service', phone: '+91 81288 51288' },
  { name: 'Kishor Jhavandhra', photo: '/team/kishor-jhavandhra.webp', role: 'Sales & Technical Service', phone: '+91 88662 02589' },
  { name: 'Prakash Soni', photo: '/team/prakash-soni.webp', role: 'Sales & Technical Service', phone: '+91 78028 94502' },
  { name: 'Dipak Dobariya', photo: '/team/dipak-dobariya.webp', role: 'Sales & Technical Service', phone: '+91 90679 48314' },
  { name: 'Sachin Vora', photo: '/team/sachin-vora.webp', role: 'Sales & Technical Service', phone: '+91 79848 70694' },
  { name: 'Parth Hirani', photo: '/team/parth-hirani.webp', role: 'Sales & Technical Service', phone: '+91 70699 99887' },
  { name: 'Pankaj Barvadiya', photo: '/team/pankaj-barvadiya.webp', role: 'Sales & Technical Service', phone: '+91 84859 77347' },
  { name: 'Amar Shingare', photo: '/team/amar-shingare.webp', role: 'Sales & Technical Service', phone: '+91 81282 12511' },
  { name: 'Darshit Savaliya', photo: '/team/darshit-savaliya.webp', role: 'Sales & Technical Service', phone: '+91 93287 58868' },
  { name: 'Divyesh Gajjar', photo: '/team/divyesh-gajjar.webp', role: 'Sales & Technical Service', phone: '+91 82006 73399' },
  { name: 'Kunj Rakholiya', photo: '/team/kunj-rakholiya.webp', role: 'Sales & Support', phone: '+91 88661 02589' },
  { name: 'Harshil Changani', photo: '/team/harshil-changani.webp', role: 'Sales & Support', phone: '+91 81411 51288' },
  { name: 'Ronak Dobariya', photo: '/team/ronak-dobariya.webp', role: 'Technical Support', phone: '+91 63552 39240' },
];

export const teamSize = 1 + teamLeaders.length + dubaiTeam.length + teamMembers.length;

export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const waHref = (phone, text = 'Hi, I want a demo of DataCare Next jewellery software.') =>
  `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export const initials = (name) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
