// Page copy. Every feature claim here is backed by the official DataCare Next
// feature list (public/versionlist.pdf) or the company brochure. Do not add a
// feature that the product team has not confirmed.

export const nav = [
  { label: 'What’s New', href: '#launches' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Plans', href: '#plans' },
  { label: 'Why DataCare', href: '#why-datacare' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// Recent launches showcased near the top of the page.
// TODO (product team): confirm every claim below before go-live.
export const launches = [
  {
    id: 'offline-order-app',
    badge: 'New',
    icon: 'Smartphone',
    title: 'Offline Order App',
    tagline: 'Take orders anywhere — even without internet.',
    text: 'Built for exhibitions, client visits and wholesale rounds. Book orders party-wise with tag, design, gross / net weight and touch-wess, share a PDF order slip or image catalogue on WhatsApp in one tap, and see party-wise, tag-wise, karigar-wise and day-wise reports before you are back at the shop.',
    points: ['Works fully offline, syncs later', 'PDF order slip & image catalogue on WhatsApp', 'Party, tag, karigar & day-wise reports', 'Orders land directly in DataCare Next'],
    cta: 'See the order app',
    // Real screens — the phone in the launch block cycles through these.
    screens: [
      { src: '/images/order-app-order-entry.webp', label: 'Order entry with tag & weights' },
      { src: '/images/order-app-order-pdf.webp', label: 'PDF order slip, ready to share' },
      { src: '/images/order-app-image-catalogue.webp', label: 'Image catalogue for the client' },
      { src: '/images/order-app-party-wise-report.webp', label: 'Party-wise report' },
      { src: '/images/order-app-tag-wise-report.webp', label: 'Tag-wise requirement' },
      { src: '/images/order-app-karigar-wise-report.webp', label: 'Karigar-wise requirement' },
      { src: '/images/order-app-day-wise-pdf.webp', label: 'Day-wise order summary PDF' },
      { src: '/images/order-app-tag-wise-pdf.webp', label: 'Tag-wise summary PDF' },
    ],
  },
  {
    id: 'web-erp',
    badge: 'New',
    icon: 'Globe',
    title: 'Web-based ERP',
    tagline: 'DataCare Next, now in your browser at datacareweb.com.',
    text: 'Log in from any computer — at the shop, a branch or home — and run the business on live data. The dashboard shows sales & purchase trend, top outstanding parties, gold and silver fine on hand, cash flow and sales by category, while every entry — sales, purchase, tag stock, karigar, ledgers, GST and e-invoice — is a click away.',
    points: ['Live gold & silver rate on every bill', 'AI-powered assistant: ask for any report in plain words', 'Live dashboard: sales, outstanding, stock, cash flow', 'Multi-branch & multi-company, one login', 'GST, e-invoice & PDF reports built in', 'Daily automatic backup, no installation'],
    cta: 'Ask for web ERP access',
    link: { label: 'Open datacareweb.com', href: 'https://datacareweb.com/' },
    // Real screenshot. Add `image` to the other two launches when screens are available
    // (public/images/<name>.webp, 1200x750 or any 16:10 crop).
    image: { src: '/images/datacareweb-dashboard.webp', alt: 'DataCare web ERP dashboard – sales & purchase trend, outstanding parties, stock composition, cash flow', w: 1600, h: 1006 },
  },
  {
    id: 'rfid-solution',
    badge: 'New',
    icon: 'Radar',
    title: 'RFID Solution',
    tagline: 'Count your whole showroom in minutes.',
    text: 'A complete kit — RFID tags, a Zebra handheld reader and the DataCare RFID mobile app — installed and configured by our team. Verify stock counter by counter, find missing pieces the same day and close your books with confidence.',
    points: ['Zebra RFID reader + tags + mobile app', 'Stock verification, tag search & tag mapping', 'Missing pieces found the same day', 'Setup and training by our team'],
    cta: 'Get an RFID quote',
    image: { src: '/images/rfid-solution-kit.webp', alt: 'DataCare RFID solution – Zebra handheld RFID reader, RFID-tagged jewellery and the DataCare RFID mobile app', w: 1448, h: 1086, photo: true },
  },
];

export const marquee = [
  'GST & HUID Billing',
  'Barcode & QR Tags',
  'RFID Stock Count',
  'Karigar Management',
  'Old Gold Refinery',
  'Gold Saving Scheme',
  'Girvi / Loan',
  'Approval / Jangad',
  'Metal + Cash Ledger',
  'WhatsApp Bills',
  'Owner Mobile App',
  'E-Catalogue',
  'Multi-Branch',
  'Weighing Scale Link',
];

export const problems = [
  {
    icon: 'PackageSearch',
    pain: 'Stock mismatch and missing pieces',
    fix: 'Every piece gets a barcode or RFID tag. Counter-wise stock and tag reports show exactly what is in the showroom, so a missing piece is caught the same day.',
  },
  {
    icon: 'Timer',
    pain: 'Slow billing in the Diwali & Dhanteras rush',
    fix: 'Scan the tag and the bill fills itself — weight, purity, today’s rate, making and stone charges. Connect the weighing scale and skip typing weights.',
  },
  {
    icon: 'Hammer',
    pain: 'Karigar gold is not tracked properly',
    fix: 'Issue and receive metal against each karigar with fine-weight balances, wastage and labour, so you always know how much gold is outside the shop.',
  },
  {
    icon: 'ShieldCheck',
    pain: 'GST & HUID compliance stress',
    fix: 'GST reports, HUID reports, TDS / TCS reports and e-invoice are built in. Your CA gets clean data instead of a register.',
  },
  {
    icon: 'Wallet',
    pain: 'Udhaar and outstanding are not clear',
    fix: 'Party ledgers keep metal and amount side by side. Outstanding reports and WhatsApp reminders help you collect on time.',
  },
  {
    icon: 'Smartphone',
    pain: 'Owner is not always in the shop',
    fix: 'The DataCare owner app shows today’s sales, stock, ledgers and cash on hand from anywhere — right on your phone.',
  },
];

export const solutions = [
  {
    icon: 'Store',
    title: 'Retail Jewellery Showroom',
    plan: 'Standard / Ultra',
    text: 'Fast POS billing with GST and HUID, barcode tags, counter-wise stock, old gold exchange, repair and order booking, and monthly gold saving schemes — from a single counter to a busy multi-counter showroom.',
  },
  {
    icon: 'Truck',
    title: 'Jewellery Wholesaler',
    plan: 'Pro',
    text: 'Metal and amount in a single voucher, approval (jangad) issue and receive, rate-cut entries, VP parcel handling, weight-range stock movement and girvi / money lending — built for the way wholesalers actually trade.',
  },
  {
    icon: 'Factory',
    title: 'Jewellery Manufacturer',
    plan: 'Advance',
    text: 'Issue gold to karigars, receive finished pieces and see the exact metal loss on every job. Track melting, refinery and process steps, and calculate staff salary from the same jewellery ERP.',
  },
  {
    icon: 'Crown',
    title: 'Jadtar / Antique Manufacturing',
    plan: 'Process module',
    text: 'A process-oriented module for antique jewellery: melting, metal issue and wax / ghat / kundan workflows, with step-by-step reports so every gram is accounted for through production.',
  },
  {
    icon: 'Network',
    title: 'Multi-Branch Chains',
    plan: 'Enterprise',
    text: 'Branch-wise cash and stock inward / outward, store-wise reports, customer loyalty, lot-wise purchase, employee targets and incentives, and full user activity logs for owners who run more than one store.',
  },
  {
    icon: 'Sparkles',
    title: 'Imitation & Silver Jewellery',
    plan: 'Any edition',
    text: 'Bulk barcode generation, brand-wise MRP and discounts, employee-wise sales and tag-wise tracking of old items — ideal for high-volume imitation and silver jewellery businesses.',
  },
];

export const featureGroups = [
  {
    title: 'Billing & Sales',
    items: [
      { icon: 'ReceiptIndianRupee', title: 'GST Billing & E-Invoice', text: 'Sales, estimate and sales return with automatic CGST / SGST / IGST. E-invoice and e-credit notes are available as an add-on for businesses above the turnover limit.' },
      { icon: 'BadgeCheck', title: 'HUID & Hallmark Reports', text: 'Record the HUID on every tagged piece and print it on the bill. The tag stock and HUID report keeps you ready for any hallmarking check.' },
      { icon: 'TrendingUp', title: 'Daily Gold & Silver Rate', text: 'Set today’s rate once and every bill, estimate and stock valuation uses it. The owner app shows the current gold and silver rate on its home screen.' },
      { icon: 'Recycle', title: 'Old Gold Exchange & Refinery', text: 'Take old gold in the same bill, record purity and weight, and send it through the old-item refinery process with complete stock and GST records.' },
      { icon: 'ClipboardList', title: 'Customer Order Booking', text: 'Book customer orders with advance, design and due date. Track and cancel orders, and see pending orders at a glance.' },
      { icon: 'Wrench', title: 'Repairing Module', text: 'Issue and receive repair jobs with customer details, weight in and weight out, and charges — no more paper repair slips.' },
      { icon: 'FileStack', title: 'Quotation & Estimate', text: 'Sales and purchase quotations and quick estimates for walk-in customers, which you can convert into a bill in one step.' },
      { icon: 'SplitSquareHorizontal', title: 'Bill-wise Receipt & Labour Invoice', text: 'Receive payments against specific bills, raise labour invoices for job work and record other income and expenses.' },
    ],
  },
  {
    title: 'Stock & Inventory',
    items: [
      { icon: 'Barcode', title: 'Barcode / QR Tag Printing', text: 'Generate, edit, split and cancel tags with gross weight, net weight, purity, design and karigar. Print on any jewellery barcode printer.' },
      { icon: 'Radar', title: 'RFID Stock Tracking', text: 'Count the full showroom in minutes with an RFID reader instead of scanning tag by tag. Available as an add-on with the Enterprise edition.' },
      { icon: 'LayoutGrid', title: 'Counter-wise Stock', text: 'Know which counter holds which pieces. Transfer between counters and verify stock counter by counter at the end of the day.' },
      { icon: 'Scale', title: 'Weighing Scale Integration', text: 'Read weight directly from the electronic scale into the bill or tag. Fewer typing mistakes and faster billing at the counter.' },
      { icon: 'Hourglass', title: 'Dead Stock & Fine Reports', text: 'Find slow-moving pieces with the dead stock report and see total fine weight of gold and silver across your business.' },
      { icon: 'ArrowLeftRight', title: 'Approval / Jangad', text: 'Issue and receive goods on approval with complete weight tracking, so pieces sent to customers or traders are never forgotten.' },
      { icon: 'ShoppingCart', title: 'Purchase & Lot-wise Purchase', text: 'Purchase and debit notes with metal and amount, wholesale rate-cut entries, and lot / batch-wise purchase management in Enterprise.' },
      { icon: 'Layers', title: 'Weight-range Stock Movement', text: 'See stock movement by weight range and supplier, and set minimum stock levels so best-sellers never run out.' },
    ],
  },
  {
    title: 'Manufacturing & Staff',
    items: [
      { icon: 'Hammer', title: 'Karigar Issue / Receipt', text: 'Issue gold, silver and stones to each karigar and receive finished jewellery. See every karigar’s fine-weight balance in one click.' },
      { icon: 'Flame', title: 'Melting & Metal-loss Tracking', text: 'Track melting, refinery and wastage on every job, so the gap between metal issued and metal received is always explained.' },
      { icon: 'Gem', title: 'Jadtar / Kundan Process', text: 'Manage wax, ghat and kundan steps for antique jewellery with process-wise reports for each stage of production.' },
      { icon: 'Users', title: 'Employee Salary & Incentives', text: 'Calculate staff salary, and in Enterprise set employee targets and incentives with employee-wise sales analysis.' },
    ],
  },
  {
    title: 'Accounts & Finance',
    items: [
      { icon: 'BookOpenCheck', title: 'Metal + Cash Ledgers', text: 'Every party ledger shows gold, silver and amount together — the way jewellers actually keep accounts, with one correct balance for every party.' },
      { icon: 'Landmark', title: 'Balance Sheet, P&L, TDS / TCS', text: 'Final accounts, GST reports and TDS / TCS reports ready for your CA, plus audit interest and depreciation reports in Advance and Enterprise.' },
      { icon: 'HandCoins', title: 'Girvi / Loan Management', text: 'Run girvi and money lending against amount or metal, with interest and reports in the software and on the owner app.' },
      { icon: 'UserRoundSearch', title: 'Customer Outstanding', text: 'Outstanding report, customer last-visit report and address / parcel print help you follow up udhaar and bring customers back.' },
      { icon: 'BookOpenCheck', title: 'Day Book / Rojmel', text: 'Daily rojmel, cash book and bank book with cash / bank contra entries — your full day’s hisab on one screen.' },
      { icon: 'FileStack', title: 'Other Income & Expense', text: 'Record shop expenses and other income alongside jewellery transactions, so profit & loss is always complete.' },
      { icon: 'DatabaseBackup', title: 'Data Backup', text: 'Built-in data backup in every edition, plus a clean year-change process so you start each financial year with correct opening balances.' },
      { icon: 'LineChart', title: 'Profit & Sales Analysis', text: 'Sales and purchase zoom by month, city, party and item. Bill-wise and item-wise profit and graph reports in Enterprise.' },
    ],
  },
  {
    title: 'Growth & Control',
    items: [
      { icon: 'Smartphone', title: 'Owner Mobile App', text: 'Android app from the Basic edition (iOS with Enterprise): sales, orders, stock, ledgers, tag estimate with images and quotations on your phone.' },
      { icon: 'PiggyBank', title: 'Gold / Amount Saving Scheme', text: 'Run monthly gold or amount saving schemes (kitty / chit) from the Ultra edition, with an optional customer-facing Gold Scheme App.' },
      { icon: 'MessageCircle', title: 'WhatsApp Bills & Reminders', text: 'Send bills, payment reminders and multiple design images on WhatsApp straight from the software (WhatsApp module add-on).' },
      { icon: 'Images', title: 'Digital Image Catalogue', text: 'Image-wise item catalogue in the owner app, plus an add-on E-Catalogue app that shows available stock and order designs to your clients.' },
      { icon: 'Heart', title: 'Customer Loyalty Program', text: 'Reward repeat customers and track their purchases with the loyalty program in the Enterprise edition.' },
      { icon: 'Building2', title: 'Multi-Company & Multi-Branch', text: 'Multiple companies from the Standard edition and full branch management — cash and stock inward / outward, store-wise reports — in Enterprise.' },
      { icon: 'Lock', title: 'User Rights & Day Lock', text: 'Create users with specific rights, lock previous days so entries can’t be changed, and approve edit / delete requests.' },
      { icon: 'History', title: 'Audit Trail & Activity Log', text: 'Delete-data report from Pro, and complete user activity and entry modification reports in Enterprise — see who changed what, and when.' },
    ],
  },
];

export const deepDives = {
  billing: {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Fast GST & HUID Jewellery Billing Software',
    paragraphs: [
      'Billing is where a jewellery software earns its money. In DataCare Next, your salesperson scans the tag and the bill fills itself: item, gross and net weight, purity, HUID, today’s gold or silver rate, making charges (per gram, percentage or fixed) and stone charges. GST is calculated automatically and the bill is ready to print or send on WhatsApp.',
      'When a customer brings old gold, it goes into the same bill — weight and purity are recorded, the value is deducted from the new purchase, and the old item moves to the refinery process. Customer orders and repair jobs have their own screens, so the counter never needs a paper slip.',
    ],
    points: [
      'Rate auto-fill from today’s gold / silver rate',
      'Making charges per gram, % or fixed + stone charges',
      'Old gold exchange in the same bill',
      'HUID printed on the invoice; e-invoice add-on',
      'Multiple payment modes and bill-wise receipts',
      'Print or send the bill on WhatsApp',
    ],
  },
  accounting: {
    id: 'accounting',
    eyebrow: 'Accounting',
    title: 'Jewellery Accounting Software with Fine-Weight Ledgers',
    paragraphs: [
      'Normal accounting software only understands rupees. Jewellers work in rupees and grams. DataCare Next keeps a double ledger for every party — gold fine, silver fine and amount — so a karigar, supplier or wholesale customer always has one correct balance.',
      'Cash book, bank book, day book (rojmel), outstanding, balance sheet, profit & loss, GST and TDS / TCS reports are all part of the same system. Day-wise data lock protects closed days, and the year-change process carries balances forward cleanly.',
    ],
    points: [
      'Ledger with metal and cash side by side',
      'Total fine report for gold and silver',
      'Balance sheet, P&L, GST, TDS / TCS',
      'Outstanding and customer last-visit reports',
      'Sales / purchase zoom by month, city, party, item',
      'Day-wise data lock and built-in backup',
    ],
  },
  inventory: {
    id: 'inventory',
    eyebrow: 'Inventory',
    title: 'Barcode & RFID Jewellery Stock Management',
    paragraphs: [
      'Every piece in DataCare Next has a barcode or QR tag with gross weight, net weight, purity, design and karigar. Stock is visible category-wise, design-wise and counter-wise, and the tag stock report with images makes daily verification simple.',
      'With the RFID add-on, your staff can count the full showroom in minutes instead of hours. Each piece carries a unique RFID tag, so missing pieces are found the same day. Approval (jangad) goods, branch transfers and dead stock are all tracked against the same tag.',
    ],
    points: [
      'Tag generate, edit, weight change, split, cancel',
      'Gross / net / fine weight on every piece',
      'RFID bulk stock count (Enterprise add-on)',
      'Counter-wise and branch-wise stock',
      'Dead stock and minimum-stock reports',
      'Approval / jangad issue and receive',
    ],
  },
  manufacturing: {
    id: 'manufacturing',
    eyebrow: 'Manufacturing',
    title: 'Jewellery Manufacturing & Karigar Software',
    paragraphs: [
      'For manufacturers, the biggest risk is gold that is outside the shop. DataCare Next records every issue of gold, silver and stones to a karigar, and every receipt of finished jewellery, in fine weight. The difference is shown as wastage or loss — job by job and karigar by karigar.',
      'The Jadtar module follows the antique jewellery process step by step: melting, metal issue, wax, ghat and kundan, with reports for each stage. Labour invoices, lot-wise purchases and employee salary are handled in the same jewellery ERP, so production and accounts never go out of sync.',
    ],
    points: [
      'Karigar issue / receipt with fine-weight balance',
      'Melting, refinery and metal-loss tracking',
      'Jadtar / kundan process reports',
      'Labour invoice for job work',
      'Employee salary calculation',
      'Lot / batch-wise purchase management',
    ],
  },
  mobile: {
    id: 'mobile-app',
    eyebrow: 'Mobile & Growth',
    title: 'Jewellery Mobile App, Gold Scheme & WhatsApp',
    paragraphs: [
      'The DataCare owner app puts your business in your pocket: today’s gold and silver rate, cash on hand, sales, wholesale sales and order reports, tag stock with photos, ledgers and quick tag estimates. Share multiple design images with a customer on WhatsApp straight from the app.',
      'For your customers, the Gold Scheme App lets them join a monthly gold saving plan, pay instalments and track maturity on their own phone. The E-Catalogue app shows your available stock and designs beautifully — perfect for client visits, exhibitions and online sharing.',
    ],
    points: [
      'Owner app: rates, cash, sales, stock, ledgers',
      'Tag estimate with item photo',
      'Customer Gold Scheme App',
      'E-Catalogue app for designs and orders',
      'WhatsApp bills, reminders and images',
      'Android from Basic; iOS with Enterprise',
    ],
  },
};

export const workflow = [
  { icon: 'ShoppingCart', title: 'Purchase', text: 'Purchase, debit note and lot-wise purchase with metal and amount.' },
  { icon: 'Barcode', title: 'Tag Generation', text: 'Barcode / QR / RFID tags with weight, purity and HUID.' },
  { icon: 'Hammer', title: 'Karigar', text: 'Issue and receive metal with fine-weight balance and loss.' },
  { icon: 'ReceiptIndianRupee', title: 'Sale', text: 'Scan, bill with GST and HUID, print or WhatsApp.' },
  { icon: 'Recycle', title: 'Old Gold Exchange', text: 'Old gold in the same bill, then into refinery.' },
  { icon: 'Undo2', title: 'Sales Return', text: 'Returns and credit notes with stock back in place.' },
  { icon: 'ArrowLeftRight', title: 'Approval / Jangad', text: 'Goods on approval tracked by weight until they return.' },
  { icon: 'FileCheck2', title: 'GST', text: 'GST, TDS / TCS and e-invoice data ready for filing.' },
  { icon: 'Wallet', title: 'Outstanding', text: 'Metal + amount outstanding with reminders.' },
  { icon: 'ScanSearch', title: 'Stock Verification', text: 'Counter-wise tag check or RFID bulk count.' },
  { icon: 'CalendarRange', title: 'Year Change', text: 'Close the year and carry balances forward.' },
  { icon: 'DatabaseBackup', title: 'Backup / Restore', text: 'Built-in data backup to keep every record safe.' },
];

// Edition comparison. Source: public/versionlist.pdf.
// Values: true = included, false = not included, 'add' = paid add-on, or a string.
export const editions = ['Lite', 'Basic', 'Standard', 'Ultra', 'Pro', 'Advance', 'Enterprise'];

export const PLAN_FILTERS = ['All', 'Retail', 'Wholesale', 'Manufacturing', 'Chain'];

export const editionCards = [
  {
    name: 'Standard',
    tagline: 'Retail Essentials',
    type: 'Retail',
    features: [
      'Barcode & tag stock management',
      'GST, HUID & compliance reports',
      'Repairing module & order booking',
      'Daily gold / silver rate fixing',
      'Balance sheet, TDS / TCS & fine reports',
    ],
  },
  {
    name: 'Ultra',
    tagline: 'Retail + Gold Schemes',
    type: 'Retail',
    features: [
      'Includes all Standard features',
      'Monthly gold / amount saving schemes',
      'Android owner mobile app',
      'Old item melt & refinery process',
      'Bill-to-bill amount receipt',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Wholesale & Finance',
    type: 'Wholesale',
    features: [
      'Includes all Ultra features',
      'Girvi / loan management',
      'Dead stock report',
      'Stock movement (weight-wise)',
      'Delete-data audit report',
    ],
  },
  {
    name: 'Advance',
    tagline: 'Manufacturing Unit',
    type: 'Manufacturing',
    features: [
      'Includes all Pro features',
      'Employee salary management',
      'Tag split facility',
      'Audit interest & depreciation reports',
      'Karigar & metal-loss tracking',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Multi-Branch Ecosystem',
    type: 'Chain',
    flagship: true,
    badge: 'Ultimate',
    features: [
      'Includes all Advance features',
      'iOS app & branch management',
      'Customer loyalty program',
      'Bill & item-wise profit analytics',
      'User activity logs & edit approvals',
    ],
  },
];

export const editionMatrix = [
  {
    group: 'Basics',
    rows: [
      ['Company management', ['1', '2', 'Multi', 'Multi', 'Multi', 'Multi', 'Multi']],
      ['Android mobile app', [false, true, true, true, true, true, true]],
      ['iOS mobile app', [false, false, false, false, false, false, true]],
    ],
  },
  {
    group: 'Transactions',
    rows: [
      ['Barcode / QR code tags', [true, true, true, true, true, true, true]],
      ['Sales / estimate / sales return', [true, true, true, true, true, true, true]],
      ['Purchase / debit note', [true, true, true, true, true, true, true]],
      ['Approval issue / receive', [true, true, true, true, true, true, true]],
      ['Wholesale / rate-cut', [true, true, true, true, true, true, true]],
      ['Tag weight change', [false, true, true, true, true, true, true]],
      ['Tag split', [false, false, false, false, false, true, true]],
      ['Sale / purchase quotation', [false, true, true, true, true, true, true]],
      ['Counter-wise stock', [false, true, true, true, true, true, true]],
      ['E-invoice / e-credit note', [false, 'add', 'add', 'add', 'add', 'add', 'add']],
      ['Labour invoice', [false, true, true, true, true, true, true]],
      ['Old item refinery process', [false, false, true, true, true, true, true]],
      ['Bill-wise payment receive', [false, false, true, true, true, true, true]],
      ['Lot / batch-wise purchase', [false, false, false, false, false, false, true]],
      ['RFID integration', [false, false, false, false, false, false, 'add']],
    ],
  },
  {
    group: 'Orders & repairs',
    rows: [
      ['Sales order / order cancel', [true, true, true, true, true, true, true]],
      ['Repairing issue / receive', [false, false, true, true, true, true, true]],
      ['Order tracking report', [false, false, false, false, false, false, true]],
    ],
  },
  {
    group: 'Security & control',
    rows: [
      ['User create / data backup', [true, true, true, true, true, true, true]],
      ['User rights', [false, true, true, true, true, true, true]],
      ['Day-wise data lock', [false, false, true, true, true, true, true]],
      ['Delete data report', [false, false, false, false, true, true, true]],
      ['User activity & entry modification log', [false, false, false, false, false, false, true]],
      ['User edit / delete requests', [false, false, false, false, false, false, true]],
    ],
  },
  {
    group: 'Accounts & reports',
    rows: [
      ['Ledger with metal and cash', [true, true, true, true, true, true, true]],
      ['GST reports, tag stock / HUID report', [true, true, true, true, true, true, true]],
      ['Day book / rojmel, outstanding', [false, true, true, true, true, true, true]],
      ['Balance sheet / P&L, TDS / TCS', [false, false, true, true, true, true, true]],
      ['Total fine report', [false, false, true, true, true, true, true]],
      ['Sales / purchase zoom', [false, false, true, true, true, true, true]],
      ['Dead stock, weight-range stock movement', [false, false, false, false, true, true, true]],
      ['Audit interest / depreciation', [false, false, false, false, false, true, true]],
      ['Bill-wise & item-wise profit, graphs', [false, false, false, false, false, false, true]],
      ['Employee incentive, target & sales analysis', [false, false, false, false, false, false, true]],
    ],
  },
  {
    group: 'Modules',
    rows: [
      ['Saving scheme / chit fund', [false, false, false, true, true, true, true]],
      ['Girvi / money lending / loan', [false, false, false, false, true, true, true]],
      ['Employee salary calculation', [false, false, false, false, false, true, true]],
      ['WhatsApp module', [false, 'add', 'add', 'add', 'add', 'add', 'add']],
      ['Weighing scale connectivity', [false, false, 'add', 'add', 'add', 'add', 'add']],
      ['Customer loyalty program', [false, false, false, false, false, false, true]],
      ['Branch management (cash & stock in / out)', [false, false, false, false, false, false, true]],
      ['CRM module', [false, false, false, false, false, false, 'add']],
      ['Image catalogue in mobile app', [false, false, true, true, true, true, true]],
      ['E-Catalogue Android app', ['add', 'add', 'add', 'add', 'add', 'add', 'add']],
    ],
  },
];

export const reasons = [
  { icon: 'MapPin', title: 'Local team in Ahmedabad', text: 'A real office in Bopal, Ahmedabad and a branch in Dubai. Talk to people who know the jewellery trade, in your language.' },
  { icon: 'Gem', title: 'Built only for jewellers', text: 'Metal + cash ledgers, fine weight, HUID, karigar, girvi, jangad — designed around how Indian jewellers really work.' },
  { icon: 'Zap', title: 'Fast entry, fewer clicks', text: 'Scan-to-bill, rate auto-fill and scale integration keep the counter moving even on Dhanteras.' },
  { icon: 'Settings2', title: 'Report formats for your shop', text: 'We adjust specific report and bill formats to match your workflow within your edition.' },
  { icon: 'Layers3', title: 'Grows with your business', text: 'Start with Lite or Basic and move up to Enterprise as you add counters, branches or manufacturing.' },
  { icon: 'Handshake', title: 'Clear editions & AMC', text: 'Seven clearly defined editions and a transparent annual service charge — no surprises after installation.' },
];

export const comparison = [
  ['Local team & support in Ahmedabad', true, 'Varies'],
  ['Metal + cash double ledger', true, 'Sometimes'],
  ['Karigar issue / receipt with fine balance', true, 'Sometimes'],
  ['RFID stock count', 'Add-on', 'Sometimes'],
  ['Girvi / loan management', true, 'Rarely'],
  ['Gold scheme with customer app', true, 'Rarely'],
  ['Weighing scale integration', 'Add-on', 'Varies'],
  ['WhatsApp bills & reminders', 'Add-on', 'Varies'],
  ['Report formats adjusted for your shop', true, 'Rarely'],
  ['Seven editions from small to enterprise', true, 'Varies'],
];

export const hardware = [
  { icon: 'Printer', title: 'Barcode / Tag Printer', tag: 'We supply', text: 'Sharp jewellery tag printing for high-volume use, set up with your tag format.' },
  { icon: 'ScanBarcode', title: 'Barcode Gun Scanner', tag: 'We supply', text: 'Scan-to-bill, quick stock checks and approval returns.' },
  { icon: 'Radar', title: 'RFID Reader & Tags', tag: 'Enterprise add-on', text: 'Count the whole showroom in minutes instead of tag by tag.' },
  { icon: 'Scale', title: 'Electronic Weighing Scale', tag: 'Add-on · Standard+', text: 'Weight flows straight into tags and bills — no typing errors.' },
  { icon: 'Tags', title: 'Labels & Carbon Ribbon', tag: 'We supply', text: 'Jewellery barcode labels in sheet and roll form, smudge-resistant ribbons.' },
  { icon: 'Laptop', title: 'Billing Computers', tag: 'We supply', text: 'Tested, certified refurbished laptops and desktops for counters.' },
];

export const phoneScreens = [
  { src: '/images/owner-app-dashboard.webp', alt: 'Owner app dashboard' },
  { src: '/images/owner-app-tag-stock-with-images.webp', alt: 'Tag stock with images' },
  { src: '/images/owner-app-tag-estimate.webp', alt: 'Tag estimate' },
  { src: '/images/owner-app-stock-report.webp', alt: 'Stock report' },
  { src: '/images/owner-app-ledger-report.webp', alt: 'Ledger report' },
  { src: '/images/gold-scheme-app-home.webp', alt: 'Gold scheme app home' },
];

export const process = [
  { title: 'Discovery & demo', text: 'We understand your business — retail, wholesale or manufacturing — and show DataCare Next with your own workflow.' },
  { title: 'Data setup', text: 'Our team helps set up your items, parties and opening stock, including data from Tally, Excel or your old software.' },
  { title: 'Staff training', text: 'Counter staff, accountant and owner are trained on billing, tags, reports and the mobile app.' },
  { title: 'Go live & support', text: 'You start billing with support on phone, WhatsApp and remote desktop, plus on-site visits in Ahmedabad.' },
];

export const FAQ_CATEGORIES = ['All', 'Getting started', 'Features', 'GST & hardware', 'Support & data'];

export const faqs = [
  {
    q: 'Which is the best jewellery software in India?',
    cat: 'Getting started',
    a: 'The best jewellery software is the one that fits your business type and keeps your entry fast. DataCare Next is built only for jewellers — retail, wholesale, manufacturing and Jadtar — with GST and HUID billing, metal + cash ledgers, karigar, girvi, gold scheme and a mobile app. It has served jewellers for over 17 years. Ask for a side-by-side demo with your own data before you decide.',
  },
  {
    q: 'What is the price of DataCare Next jewellery software?',
    cat: 'Getting started',
    a: 'Price depends on the edition (Lite, Basic, Standard, Ultra, Pro, Advance or Enterprise), the number of computers and the add-ons you choose, such as WhatsApp, e-invoice or RFID. Hardware is priced separately and an annual service charge (AMC) applies. Share your requirement on WhatsApp or the demo form and our team will send an exact quote.',
  },
  {
    q: 'Does DataCare Next support GST, e-invoice and HUID?',
    cat: 'GST & hardware',
    a: 'Yes. Every sale bill calculates GST automatically and can carry the HUID of each piece. You get GST reports, TDS / TCS reports and a tag stock / HUID report in every edition. E-invoice and e-credit notes are available as an add-on for businesses that need them.',
  },
  {
    q: 'Can I manage karigar gold and wastage in the software?',
    cat: 'Features',
    a: 'Yes. You can issue gold, silver and stones to each karigar and receive finished jewellery against it. DataCare Next keeps a fine-weight balance for every karigar and shows wastage or metal loss on each job, along with labour invoices. Manufacturers can also track melting, refinery and the Jadtar / kundan process.',
  },
  {
    q: 'Does it work with RFID readers and weighing scales?',
    cat: 'GST & hardware',
    a: 'Yes. Weighing scale connectivity is available as an add-on from the Standard edition, so weight goes directly into tags and bills. RFID integration is available as an add-on with the Enterprise edition for bulk stock counting. We also supply barcode printers, scanners, labels and ribbons.',
  },
  {
    q: 'Is there a mobile app for jewellery shop owners and customers?',
    cat: 'Features',
    a: 'Yes. The owner app (Android from the Basic edition, iOS with Enterprise) shows gold and silver rates, cash on hand, sales, stock with images, ledgers and estimates. For customers there is a Gold Scheme App, and an E-Catalogue app to show your designs.',
  },
  {
    q: 'Can I run a gold saving scheme or kitty with the software?',
    cat: 'Features',
    a: 'Yes. From the Ultra edition you can run monthly gold or amount saving schemes (kitty / chit fund). Instalments, maturity and scheme reports are tracked in the software and the owner app, and customers can follow their plan in the Gold Scheme App.',
  },
  {
    q: 'Do you have girvi or gold loan software for jewellers?',
    cat: 'Features',
    a: 'Yes. Girvi / money lending against amount or metal is included from the Pro edition. Loans, interest and girvi reports are available in the desktop software, and the scheme / money lending report is also visible in the owner mobile app.',
  },
  {
    q: 'Can I move my data from Tally, Excel or another jewellery software?',
    cat: 'Support & data',
    a: 'Our team helps you set up your items, parties and opening stock when you switch, including data from Tally, Excel or your previous jewellery software. Tell us what you use today during the demo and we will explain exactly what can be brought across.',
  },
  {
    q: 'Does DataCare Next support multiple branches?',
    cat: 'Features',
    a: 'Yes. Multiple companies are supported from the Standard edition. The Enterprise edition adds full branch management — cash and stock inward / outward between stores and store-wise reports — along with loyalty, profit analysis and user activity logs.',
  },
  {
    q: 'Is this a sona chandi hisab software for gold and silver accounts?',
    cat: 'Features',
    a: 'Yes. DataCare Next is a complete sona-chandi hisab kitab software: every ledger keeps gold fine, silver fine and amount together, with day book (rojmel), outstanding and total fine reports. It replaces the traditional hisab register with accurate, searchable records.',
  },
  {
    q: 'Do you give a free demo and training?',
    cat: 'Getting started',
    a: 'Yes. You can book a free demo online, on WhatsApp or by calling any member of our team. After purchase, your staff is trained on billing, tags, reports and the mobile app, and our support team is available Monday to Saturday, 10 AM to 7 PM.',
  },
  {
    q: 'Where is your office and how do I get support?',
    cat: 'Support & data',
    a: 'Our head office is at 1019, Shivam Trade Center (STC), beside One World West, Bopal, Ahmedabad, Gujarat 380058, and our UAE branch is Datacare Softech FZCO in Dubai Silicon Oasis. Support is available on phone, WhatsApp and remote desktop, with on-site visits in Ahmedabad.',
  },
];
