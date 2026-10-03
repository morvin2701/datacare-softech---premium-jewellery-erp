// Converts the raw screenshots in /assets, /new images and /public into small,
// descriptively named WebP files in /public/images (SEO: file name + size).
// Run with: npm run images
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { desktopShots, mobileSources } from '../lib/gallery.js';

const out = 'public/images';
await mkdir(out, { recursive: true });

const jobs = [
  // [source, output name, max width, quality]
  ['assets/Next.jpg', 'datacare-next-jewellery-software-desktop', 1600, 78],
  ['assets/01.png', 'datacare-next-on-desktop-laptop-tablet-mobile', 1400, 80],
  ['assets/04.png', 'jewellery-e-catalogue-app-screens', 1200, 80],
  ['assets/05.png', 'gold-scheme-app-screens', 1200, 80],
  ['assets/HeroTablet.PNG', 'gold-scheme-app-home', 560, 80],
  ['new images/IMG_1837.PNG', 'owner-app-dashboard', 560, 80],
  ['new images/IMG_1838.PNG', 'owner-app-product-list', 560, 80],
  ['new images/IMG_1839.PNG', 'owner-app-tag-stock-with-images', 560, 80],
  ['new images/IMG_1840.PNG', 'owner-app-tag-estimate', 560, 80],
  ['new images/IMG_1841.PNG', 'owner-app-stock-report', 560, 80],
  ['new images/IMG_1842.PNG', 'owner-app-ledger-report', 560, 80],
  ['new images/IMG_1843.PNG', 'owner-app-ledger-detail-gold-silver', 560, 80],
  ['assets/HeroMobile.PNG', 'owner-app-daily-gold-silver-rate', 560, 80],
  ['assets/logo.png', 'datacare-softech-logo', 256, 90],
];

for (const [src, name, width, quality] of jobs) {
  const info = await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(`${out}/${name}.webp`);
  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}

// Favicons (app/ icon convention) — real small PNGs, not the 3 MB logo.
await sharp('assets/logo.png').resize(32, 32).png().toFile('app/icon.png');
await sharp('assets/logo.png').resize(180, 180).flatten({ background: '#ffffff' }).png().toFile('app/apple-icon.png');
console.log('favicons written');

// Product gallery: small thumbnail for the reel + large version for the lightbox.
await mkdir(`${out}/gallery`, { recursive: true });
for (let i = 0; i < desktopShots.length; i++) {
  const n = String(i + 1).padStart(2, '0');
  const src = `assets/ProductScreen/${n}.jpg`;
  await sharp(src).resize(1600, 850, { fit: 'contain', background: '#ffffff' }).webp({ quality: 78 }).toFile(`${out}/gallery/desktop-${n}.webp`);
  await sharp(src).resize(560, 298, { fit: 'cover', position: 'top' }).webp({ quality: 72 }).toFile(`${out}/gallery/desktop-${n}-sm.webp`);
}
for (let i = 0; i < mobileSources.length; i++) {
  const n = String(i + 1).padStart(2, '0');
  await sharp(mobileSources[i]).resize(700, 1517, { fit: 'cover', position: 'top' }).webp({ quality: 80 }).toFile(`${out}/gallery/mobile-${n}.webp`);
  await sharp(mobileSources[i]).resize(300, 650, { fit: 'cover', position: 'top' }).webp({ quality: 74 }).toFile(`${out}/gallery/mobile-${n}-sm.webp`);
}
console.log(`gallery: ${desktopShots.length} desktop + ${mobileSources.length} mobile`);
