import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import { SITE_URL, company } from '@/lib/site';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const title = 'Jewellery Software in India | Billing & ERP - DataCare Next';
const description =
  'DataCare Next jewellery software for retail, wholesale & manufacturing jewellers. GST, HUID, RFID, Karigar, Gold Scheme & Mobile App. Free demo - Ahmedabad.';

const GTM_ID = 'GTM-P3L5NTJQ';
const GA_ID = 'G-GLSSJE7GJ2';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: `${SITE_URL}/` },
  applicationName: company.product,
  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.name,
  category: 'Business Software',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE_URL}/`,
    siteName: company.name,
    title,
    description,
    images: [
      {
        url: '/og-datacare-next.png',
        width: 1200,
        height: 630,
        alt: 'DataCare Next – Jewellery Software in India for retail, wholesale & manufacturing jewellers',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-datacare-next.png'] },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
  },
};

export const viewport = {
  themeColor: '#0A1120',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available so scroll-reveal styles only apply when they can be undone. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
