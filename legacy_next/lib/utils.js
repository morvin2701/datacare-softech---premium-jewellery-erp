export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getWhatsAppUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
