import IndiaMap from './IndiaMap';
import SectionHeading from './SectionHeading';
import { states, totalCustomers } from '@/lib/coverage';

export default function Locations() {
  return (
    <section id="locations" className="dark-surface section relative overflow-hidden text-white">
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Cities we serve"
          title={
            <>
              Jewellery Software <em className="gold-text">across India</em>
            </>
          }
          intro={`${totalCustomers.toLocaleString('en-IN')}+ jewellers across ${states.length} states and union territories run DataCare Next, with our home base in Gujarat. Installation, training and support work remotely anywhere in India, with on-site visits across Gujarat.`}
        />
        <div className="mt-14" data-reveal="zoom">
          <IndiaMap />
        </div>
        {/* Plain-text city list for search engines and no-JS visitors */}
        <div className="sr-only">
          {states.map((s) => (
            <p key={s.name}>
              Jewellery software in {s.name}: {s.cities.map((c) => c.name).join(', ')}.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
