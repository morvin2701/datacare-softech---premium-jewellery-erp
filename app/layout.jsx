import SmoothScroll from '../components/ui/SmoothScroll';
import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
