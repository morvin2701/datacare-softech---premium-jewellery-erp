import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Marquee from '@/components/Marquee';
import Launches from '@/components/Launches';
import Problems from '@/components/Problems';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import DeepDives from '@/components/DeepDives';
import Workflow from '@/components/Workflow';
import Plans from '@/components/Plans';
import WhyDataCare from '@/components/WhyDataCare';
import Hardware from '@/components/Hardware';
import Screenshots from '@/components/Screenshots';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import Locations from '@/components/Locations';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';
import ContactDialog from '@/components/ContactDialog';
import Effects from '@/components/Effects';
import Schema from '@/components/Schema';

// Section order follows the SEO blueprint (S1–S20).
export default function HomePage() {
  return (
    <>
      <Schema />
      <a href="#features" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Marquee />
        <Launches />
        <Problems />
        <Solutions />
        <Features />
        <DeepDives />
        <Workflow />
        <Plans />
        <WhyDataCare />
        <Hardware />
        <Screenshots />
        <Process />
        <Reviews />
        <About />
        <Locations />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <ContactDialog />
      <Effects />
    </>
  );
}
