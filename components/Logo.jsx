import Image from 'next/image';

export default function Logo({ dark = true }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="DataCare Softech – Jewellery Software home">
      <Image
        src="/images/datacare-softech-logo.webp"
        alt="DataCare Softech - Jewellery Software"
        width={40}
        height={40}
        priority
        className="h-10 w-10 rounded-lg bg-white p-0.5"
      />
      <span className="leading-none">
        <span className={`block font-display text-lg font-semibold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>
          DataCare <span className="text-gold">Softech</span>
        </span>
        <span className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${dark ? 'text-white/50' : 'text-ink-faint'}`}>
          DataCare Next ERP
        </span>
      </span>
    </a>
  );
}
