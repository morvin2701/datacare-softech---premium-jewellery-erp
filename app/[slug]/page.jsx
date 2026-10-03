import { notFound } from 'next/navigation';
import LandingPage, { landingMetadata } from '@/components/LandingPage';
import { landingBySlug, landingPages } from '@/lib/landing';

// Static export: one HTML file per landing page in lib/landing.js.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!landingBySlug[slug]) return {};
  return landingMetadata(slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!landingBySlug[slug]) notFound();
  return <LandingPage slug={slug} />;
}
