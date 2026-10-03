import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import KeyFacts from '../components/KeyFacts';
import AIFeatureSection from '../components/AIFeatureSection';
import AIImageShowcase from '../components/AIImageShowcase';
import AIVideoShowcase from '../components/AIVideoShowcase';
import EnterpriseFeatureGrid from '../components/EnterpriseFeatureGrid';
import HardwareEcosystem from '../components/HardwareEcosystem';
import AddOnsGrid from '../components/AddOnsGrid';
import PricingTiers from '../components/PricingTiers';
import OnboardingJourney from '../components/OnboardingJourney';
import MobileAppsShowcase from '../components/MobileAppsShowcase';
import PreviewCarousel from '../components/PreviewCarousel';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Marquee />

        <AIFeatureSection
          id="ai-image"
          eyebrow="AI-Powered Innovation"
          title="Intelligent"
          highlight="image generation"
          description="Transform your jewellery catalogue with cutting-edge AI. Create stunning new designs, variations and visualisations that captivate your customers."
          bullets={[
            'AI image generation with preferred references',
            'Auto-analysis of existing images to create new variations',
            'Integration with live inventory for dynamic imagery',
            'Seamless editing inside the application',
          ]}
          primaryCta={{ label: 'Explore Live Demo', href: 'https://dcnextai.com', external: true }}
          secondaryCta={{ label: 'Contact Sales', href: '#contact' }}
        >
          <AIImageShowcase />
        </AIFeatureSection>

        <AIFeatureSection
          id="ai-video"
          eyebrow="Beta Feature"
          title="AI-powered"
          highlight="video generation"
          description="Turn a single product photo into a stunning showcase video — with realistic lighting, reflections and 360° motion that highlights every detail."
          bullets={[
            'AI video creation with custom lighting effects',
            'Generate product videos from a single image',
            '360-degree rotation and zoom capabilities',
            'Realistic lighting and reflection simulation',
          ]}
          primaryCta={{ label: 'Request Beta Access', href: '#contact' }}
          secondaryCta={{ label: 'Talk to Sales', href: '#contact' }}
          reverse
        >
          <AIVideoShowcase />
        </AIFeatureSection>

        <EnterpriseFeatureGrid />
        <KeyFacts />
        <HardwareEcosystem />
        <AddOnsGrid />
        <PricingTiers />
        <OnboardingJourney />
        <MobileAppsShowcase />
        <PreviewCarousel />
        <Testimonials />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
