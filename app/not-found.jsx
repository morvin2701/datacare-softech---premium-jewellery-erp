import Link from 'next/link';

export const metadata = { title: 'Page not found | DataCare Softech', robots: { index: false } };

export default function NotFound() {
  return (
    <main className="dark-surface flex min-h-screen items-center justify-center px-4 text-center text-white">
      <div>
        <p className="font-display text-8xl text-gold-light">404</p>
        <h1 className="mt-4 font-display text-3xl">This page does not exist</h1>
        <p className="mt-3 text-white/60">The page you are looking for may have moved.</p>
        <Link href="/" className="btn-gold mt-8">
          Back to DataCare Next jewellery software
        </Link>
      </div>
    </main>
  );
}
