'use client';

import { useEffect } from 'react';

// One small client island for page-wide behaviour:
//  - scroll reveal for [data-reveal]
//  - mouse-follow spotlight for .spot
//  - opens the team directory for [data-open-contacts]
//  - GA4 / GTM events: call_click, whatsapp_click
export default function Effects() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    // Elements rendered later (tab switches, filters) must be revealed too.
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        for (const n of m.addedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.hasAttribute('data-reveal')) io.observe(n);
          n.querySelectorAll?.('[data-reveal]').forEach((el) => io.observe(el));
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onMove = (e) => {
      const card = e.target.closest?.('.spot');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    const track = (event, label) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event, link_label: label });
      if (typeof window.gtag === 'function') window.gtag('event', event, { link_label: label });
    };

    const onClick = (e) => {
      // Clicking the dark backdrop of the team directory closes it.
      if (e.target.id === 'team-directory') return e.target.close();
      const opener = e.target.closest?.('[data-open-contacts]');
      if (opener) {
        const dialog = document.getElementById('team-directory');
        if (dialog?.showModal) {
          e.preventDefault();
          const filter = opener.getAttribute('data-open-contacts');
          dialog.dataset.mode = filter || 'call';
          dialog.showModal();
        }
        return;
      }
      const link = e.target.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href.startsWith('tel:')) track('call_click', link.dataset.person || href);
      else if (href.includes('wa.me/')) track('whatsapp_click', link.dataset.person || href);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('click', onClick);
    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
