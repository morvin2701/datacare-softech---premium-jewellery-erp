// Product gallery (reel + lightbox). Source files: assets/ProductScreen/NN.jpg
// and assets/mobile-screens/*.PNG → optimized by `npm run images` into /public/images/gallery.

const desktopTitles = [
  'Home screen', 'Party master', 'Opening stock & tag entry', 'Barcode tag printing',
  'Gold purchase with GST', 'Tag stock report with images', 'Gold tax invoice (sales)', 'Tax invoice print',
  'User rights', 'GST report (GSTR)', 'WhatsApp sender', 'Other expenses with GST',
  'Stock report', 'Item-wise stock print', 'Sales graph report', 'Old stock report',
  'Tag image report', 'Trial balance', 'Total fine report', 'Trading report',
  'Rojmel (day book)', 'Rojmel print', 'Rojmel with stock summary', 'Day book print',
  'Gold scheme member entry', 'Gold scheme report', 'Girvi / dhiran issue', 'Girvi interest received',
  'Girvi interest report', 'E-invoice print', 'Stock ledger', 'Cash received receipt',
  'Sale zoom (month / city / party)', 'Sales report print', 'Item-wise sales report', 'Weight-range stock movement',
  'Party in / out', 'Day-wise item in / out', 'Item stock level', 'Ledger report',
  'Party-wise ledger print', 'Ledger with gold fine', 'Account with weight report', 'Gold fine ledger print',
  'Order tracking', 'Wholesale sales (metal + amount)', 'Wholesale sales print',
];

export const desktopShots = desktopTitles.map((title, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    title,
    thumb: `/images/gallery/desktop-${n}-sm.webp`,
    full: `/images/gallery/desktop-${n}.webp`,
    w: 1600,
    h: 850,
    alt: `DataCare Next jewellery software – ${title} screen`,
  };
});

const mobileList = [
  ['IMG_1837', 'Owner app dashboard'],
  ['HeroMobile', 'Today’s gold & silver rate'],
  ['IMG_1838', 'Product list'],
  ['IMG_1839', 'Tag stock with images'],
  ['IMG_1840', 'Tag estimate'],
  ['IMG_1841', 'Stock report'],
  ['IMG_1842', 'Ledger report'],
  ['IMG_1843', 'Ledger detail – gold & silver'],
  ['HeroTablet', 'Gold Scheme App'],
  ['IMG_1836', 'Secure login'],
];

export const mobileShots = mobileList.map(([, title], i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    title,
    thumb: `/images/gallery/mobile-${n}-sm.webp`,
    full: `/images/gallery/mobile-${n}.webp`,
    w: 700,
    h: 1517,
    alt: `DataCare jewellery mobile app – ${title}`,
  };
});

export const mobileSources = mobileList.map(([file]) =>
  file.startsWith('Hero') ? `assets/${file}.PNG` : `assets/mobile-screens/${file}.PNG`
);
