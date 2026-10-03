import { faqs } from '@/lib/content';
import { SITE_URL, company, dubaiTeam, teamLeaders } from '@/lib/site';

// JSON-LD for Google. No self-awarded review stars (Google does not allow them
// for your own business) — the rating lives on the Google Business Profile.
export default function Schema() {
  const orgId = `${SITE_URL}/#organization`;
  const sameAs = Object.values(company.social);
  const intl = (p) => p.replace(/[^\d+]/g, '');

  const graph = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: company.name,
      alternateName: [company.legalDubai, 'DataCare Next'],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/datacare-softech-logo.webp`,
      email: company.email,
      founder: { '@type': 'Person', name: company.founder },
      contactPoint: [
        ...teamLeaders.map((p) => ({
          '@type': 'ContactPoint',
          telephone: intl(p.phone),
          name: p.name,
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
        })),
        ...dubaiTeam.map((p) => ({
          '@type': 'ContactPoint',
          telephone: intl(p.phone),
          name: p.name,
          contactType: 'sales',
          areaServed: 'AE',
        })),
      ],
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: company.name,
      image: `${SITE_URL}/og-datacare-next.png`,
      url: `${SITE_URL}/`,
      email: company.email,
      parentOrganization: { '@id': orgId },
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.india.street,
        addressLocality: company.india.city,
        addressRegion: company.india.region,
        postalCode: company.india.postalCode,
        addressCountry: company.india.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: company.india.geo.lat, longitude: company.india.geo.lng },
      hasMap: company.mapsUrl,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      areaServed: ['IN', 'AE'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'DataCare Next',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Jewellery ERP, billing and accounting software',
      operatingSystem: 'Windows, Android, iOS',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/datacare-next-jewellery-software-desktop.webp`,
      description:
        'Jewellery software for retail, wholesale and manufacturing jewellers in India: GST & HUID billing, barcode and RFID stock, karigar, old gold, girvi, gold saving scheme, metal + cash accounting and mobile apps.',
      publisher: { '@id': orgId },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'INR', url: `${SITE_URL}/#plans` },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: company.name,
      inLanguage: 'en-IN',
      publisher: { '@id': orgId },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  );
}
