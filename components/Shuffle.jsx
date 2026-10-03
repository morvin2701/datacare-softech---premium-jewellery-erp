'use client';

import { useEffect } from 'react';

// Randomises the order of children inside every [data-shuffle] list on each
// page load, so no team member is always first or last. Runs after hydration;
// the server HTML still lists everyone (good for search engines and no-JS).
export default function Shuffle() {
  useEffect(() => {
    document.querySelectorAll('[data-shuffle]').forEach((list) => {
      const items = Array.from(list.children);
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      items.forEach((el, i) => {
        el.style.setProperty('--delay', `${(i % 4) * 60}ms`);
        list.appendChild(el);
      });
    });
  }, []);
  return null;
}
