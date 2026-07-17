'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Monitor, Smartphone, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const softwareImages = Array.from({ length: 47 }, (_, i) => ({
  src: `/ProductScreen/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Datacare ERP software screenshot ${i + 1}`,
}));

const mobileImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/mobile/${String(i + 1).padStart(2, '0')}.png`,
  alt: `Datacare mobile app screenshot ${i + 1}`,
}));

const stripSoftwareTop = softwareImages.slice(0, 12);
const stripMobile = mobileImages;

function Thumb({ src, alt, eager = false, portrait = false }) {
  const [loaded, setLoaded] = useState(false);

  const frameClass = portrait
    ? 'w-24 sm:w-28 lg:w-32 xl:w-36 aspect-[1290/2796]'
    : 'h-32 w-56 sm:h-36 sm:w-64 lg:h-40 lg:w-[16.5rem] xl:h-44 xl:w-72';

  return (
    <span
      className={`relative block overflow-hidden rounded-lg bg-stone-100 ${frameClass}`}
    >
      {!loaded ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-stone-100 via-stone-200/80 to-stone-100"
        />
      ) : null}
      <img
        src={src}
        alt={alt}
        width={portrait ? 1290 : 288}
        height={portrait ? 2796 : 176}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'low'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-contain transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <span className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover/thumb:bg-navy/35">
        <Maximize2
          size={18}
          className="text-white opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100"
        />
      </span>
    </span>
  );
}

function StripLabel({ icon: Icon, children }) {
  return (
    <div className="section-container mb-3 px-0">
      <div className="flex items-center justify-center gap-3">
        <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-line sm:block" />
        <span className="inline-flex shrink-0 items-center gap-2 rounded-pill border border-line bg-white/80 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-brand text-ink-muted shadow-[0_1px_8px_rgba(11,18,32,0.04)] backdrop-blur-sm">
          <Icon size={13} strokeWidth={1.75} className="text-gold-dark" />
          {children}
        </span>
        <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-line sm:block" />
      </div>
    </div>
  );
}

function FilmStrip({
  images,
  reverse = false,
  onSelect,
  type,
  active,
  portrait = false,
}) {
  if (!active) {
    const skeletonClass = portrait
      ? 'w-24 sm:w-28 lg:w-32 xl:w-36 aspect-[1290/2796]'
      : 'h-32 w-56 sm:h-36 sm:w-64 lg:h-40 lg:w-[16.5rem] xl:h-44 xl:w-72';

    return (
      <div
        className={`flex gap-4 overflow-hidden sm:gap-5 ${portrait ? '' : 'h-32 sm:h-36 lg:h-40 xl:h-44'}`}
      >
        {images.slice(0, portrait ? 7 : 4).map((img) => (
          <span
            key={img.src}
            className={`shrink-0 animate-pulse rounded-xl bg-stone-200/70 ${skeletonClass}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory to-transparent sm:w-28" />

      <div
        className={`flex w-max gap-4 py-2 sm:gap-5 ${
          reverse ? 'animate-marquee-right' : 'animate-marquee'
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {[...images, ...images].map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => onSelect(type, i % images.length)}
            aria-label={`Open ${img.alt}`}
            className={`group/thumb relative shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold-lg ${
              portrait ? 'p-2' : 'p-1.5'
            }`}
          >
            <Thumb src={img.src} alt={img.alt} eager={i < 4} portrait={portrait} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PreviewCarousel() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isNearView = useInView(sectionRef, { once: true, margin: '240px 0px' });
  const [modal, setModal] = useState(null);

  const gallery =
    modal?.gallery === 'mobile'
      ? mobileImages
      : softwareImages;

  const getGallery = (gallery) =>
    gallery === 'mobile' ? mobileImages : softwareImages;

  const openStrip = (type, index) => {
    if (type === 'mobile') {
      setModal({ gallery: 'mobile', index });
      return;
    }
    setModal({ gallery: 'software', index });
  };

  const prev = () =>
    setModal((m) => {
      if (!m) return m;
      const images = getGallery(m.gallery);
      return { ...m, index: m.index === 0 ? images.length - 1 : m.index - 1 };
    });
  const next = () =>
    setModal((m) => {
      if (!m) return m;
      const images = getGallery(m.gallery);
      return { ...m, index: m.index === images.length - 1 ? 0 : m.index + 1 };
    });

  useEffect(() => {
    if (!modal) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setModal(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  const modalImage = modal ? gallery[modal.index] : null;
  const modalTitle =
    modal?.gallery === 'mobile' ? 'Mobile App Gallery' : 'Desktop ERP Gallery';

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden border-t border-stone-200/40 bg-ivory pb-6 pt-8 md:pb-8 md:pt-10"
    >
      <div className="section-container">
        <SectionHeading
          index="06"
          eyebrow="Live Preview"
          title="Preview"
          highlight="Our Solutions"
          description="A living reel of the real product — desktop ERP and mobile apps. Tap any frame to explore the full gallery."
        />
      </div>

      <div className="mt-10 space-y-8 md:mt-12">
        <div>
          <StripLabel icon={Monitor}>Desktop ERP</StripLabel>
          <FilmStrip
            images={stripSoftwareTop}
            type="software-top"
            onSelect={openStrip}
            active={isNearView}
          />
        </div>

        <div>
          <StripLabel icon={Smartphone}>Mobile Apps</StripLabel>
          <FilmStrip
            images={stripMobile}
            type="mobile"
            onSelect={openStrip}
            active={isNearView}
            reverse
            portrait
          />
        </div>
      </div>

      <AnimatePresence>
        {modal && modalImage ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/75 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={modalTitle}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl rounded-card border border-line bg-white p-4 shadow-card-hover md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  {modal.gallery === 'mobile' ? (
                    <Smartphone size={20} className="text-gold-dark" />
                  ) : (
                    <Monitor size={20} className="text-gold-dark" />
                  )}
                  <h3 className="font-display text-xl font-bold text-ink">
                    {modalTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="rounded-full border border-line p-2 text-ink-muted transition-colors hover:border-gold hover:text-gold-dark"
                  aria-label="Close preview"
                >
                  <X size={18} />
                </button>
              </div>

              <div
                className={`relative mb-4 overflow-hidden rounded-lg bg-stone-100 ${
                  modal.gallery === 'mobile' ? 'mx-auto aspect-[1290/2796] max-h-[70vh] w-full max-w-sm' : 'aspect-video'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={modalImage.src}
                    initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={modalImage.src}
                      alt={modalImage.alt}
                      fill
                      className="object-contain"
                      sizes={
                        modal.gallery === 'mobile'
                          ? '(max-width: 384px) 100vw, 384px'
                          : '(max-width: 896px) 100vw, 896px'
                      }
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-stone-200 p-2 text-ink-muted transition-colors hover:border-gold hover:text-gold"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-center text-sm text-ink-muted">
                  {modal.index + 1} / {gallery.length}
                  <span className="mt-0.5 block text-xs text-ink-faint">
                    {modalImage.alt}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-stone-200 p-2 text-ink-muted transition-colors hover:border-gold hover:text-gold"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
