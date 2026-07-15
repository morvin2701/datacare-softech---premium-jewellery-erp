import { cn } from '../../lib/utils';

/**
 * The single card component reused for feature, add-on, pricing and team cards.
 * Consistent radius, border, shadow and padding across the whole site.
 */
export default function Card({
  as: Tag = 'div',
  dark = false,
  hover = true,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        dark ? 'card-surface-dark' : 'card-surface',
        hover && (dark ? 'hover-lift-dark' : 'hover-lift'),
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Consistent gold icon tile used inside cards and feature lists.
 */
export function IconBadge({ icon: Icon, dark = false, className = '', size = 'md' }) {
  const dims = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';
  const iconSize = size === 'sm' ? 18 : 22;
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-xl',
        dark
          ? 'bg-gold/10 text-gold ring-1 ring-gold/25'
          : 'bg-gold/10 text-gold-dark ring-1 ring-gold/20',
        dims,
        className
      )}
    >
      <Icon size={iconSize} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
