import { cn } from '@/lib/utils';

export default function Badge({ children, className, dark = false }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider',
        dark
          ? 'bg-gold/15 text-gold-light border border-gold/30'
          : 'bg-gold/10 text-gold-dark border border-gold/25',
        className
      )}
    >
      {children}
    </span>
  );
}
