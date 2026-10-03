import Image from 'next/image';
import { initials } from '@/lib/site';

// Team photo if one is configured, otherwise an engraved-gold monogram.
export default function Avatar({ person, size = 56, className = '' }) {
  if (person.photo) {
    return (
      <Image
        src={person.photo}
        alt={`${person.name}, ${person.role} at DataCare Softech`}
        width={size}
        height={size}
        className={`shrink-0 rounded-full object-cover ring-2 ring-gold/40 ${className}`}
        loading="lazy"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark font-display font-semibold text-navy shadow-gold ring-2 ring-white ${className}`}
    >
      {initials(person.name)}
    </span>
  );
}
