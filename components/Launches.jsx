import LaunchList from './LaunchList';
import SectionHeading from './SectionHeading';

export default function Launches() {
  return (
    <section id="launches" className="section relative bg-ivory-deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="New launches"
          title={
            <>
              What’s new in <em className="gold-text">DataCare Next</em>
            </>
          }
          intro="Four additions built from what jewellers asked for this year — orders without internet, the ERP in your browser, a complete RFID kit for stock counting, and WhatsApp messaging on the official Meta API."
        />
        <LaunchList />
      </div>
    </section>
  );
}
