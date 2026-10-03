import { Montserrat, Inter, Fraunces } from 'next/font/google';
import SmoothScroll from '../components/ui/SmoothScroll';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Characterful serif for editorial/luxury accents (headline highlight, numerals).
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'Premium Jewellery ERP Software | Datacare Softech',
  description:
    'Datacare Softech provides premium jewellery ERP software for gold, diamond, and jewellery businesses. Streamline inventory, sales, GST compliance, and operations with AI-powered tools.',
  keywords:
    'jewellery erp, gold erp software, diamond management software, jewellery inventory management, jewellery pos system',
  authors: [{ name: 'Datacare Softech' }],
  openGraph: {
    type: 'website',
    url: 'https://www.datacaresoftware.com/',
    title: 'Premium Jewellery ERP Software | Datacare Softech',
    description:
      'Advanced jewellery ERP software for gold & diamond businesses. Streamline inventory, sales, and operations.',
    siteName: 'Datacare Softech',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.datacaresoftware.com/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
