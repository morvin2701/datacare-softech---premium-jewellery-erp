// Landing pages (one URL each, exported as /<slug>/index.html). Every claim
// here is already made on the home page or in versionlist.pdf — keep it that way.
//
// featureGroup = index into featureGroups (lib/content.js) for the tick list.
// visual       = 'billing' | 'ledger' | 'rfid' | 'desktop'
// city         = adds the "near <city>" block; state must match lib/coverage.js

export const landingPages = [
  {
    slug: 'jewellery-billing-software',
    breadcrumb: 'Jewellery Billing Software',
    metaTitle: 'Jewellery Billing Software with GST & HUID | DataCare Next',
    metaDescription:
      'Jewellery billing software: scan the tag, auto gold rate, making charges, GST & HUID on every bill, old gold exchange, WhatsApp invoice. Free demo in India.',
    eyebrow: 'Jewellery billing software',
    h1: 'Jewellery Billing Software — scan the tag, bill in seconds',
    intro:
      'DataCare Next is jewellery billing software built for the Indian counter. Scan a barcode or RFID tag and the bill fills itself — gross and net weight, purity, today’s gold or silver rate, making and stone charges, HUID and GST. Print it, or send it to the customer on WhatsApp before they leave the counter.',
    proof: ['GST & HUID on every bill', 'Scan-to-bill · scale connected', '17+ years · 7,000+ jewellers'],
    bodyTitle: 'Billing without the typing',
    body: [
      'Billing is where most jewellery software slows down: typing weights, looking up the rate, working out making charges, then GST. DataCare Next removes each of those steps. The electronic weighing scale sends the weight straight into the bill, the day’s rate is fixed once in the morning and applied to every sale, estimate and stock valuation, and making charges can be per gram, a percentage or a fixed amount per design. CGST, SGST or IGST is calculated automatically.',
      'Old gold comes into the same bill: record the purity and weight, deduct its value from the purchase and send the item into the refinery process with complete stock and GST records. Customer orders, repairs and estimates have their own screens, so the counter never needs a paper slip — and every bill is traceable later through bill-wise receipts, outstanding reports and the owner mobile app.',
    ],
    visual: 'billing',
    highlightsTitle: 'What makes billing fast',
    highlights: [
      { icon: 'Barcode', title: 'Scan-to-bill', text: 'A barcode or RFID tag fills item, weights, purity and HUID in one scan.' },
      { icon: 'TrendingUp', title: 'Daily rate, fixed once', text: 'Set the gold and silver rate in the morning; every bill and estimate uses it.' },
      { icon: 'ReceiptIndianRupee', title: 'GST done for you', text: 'CGST / SGST / IGST on every invoice; e-invoice and e-credit notes as an add-on.' },
      { icon: 'Recycle', title: 'Old gold in the same bill', text: 'Exchange old gold at the counter and move it into refinery with full records.' },
      { icon: 'MessageCircle', title: 'Invoice on WhatsApp', text: 'Print, or send the PDF invoice to the customer from your business number.' },
      { icon: 'Scale', title: 'Weighing scale connected', text: 'Weight goes straight from the scale into the tag or bill — no typing errors.' },
    ],
    featureGroup: 0,
    editions: ['Lite', 'Standard', 'Ultra'],
    editionsNote: 'Billing, tags and GST reports are in every edition — from Lite for a single counter upwards.',
    faqs: [
      { q: 'Does the jewellery billing software print the HUID on the invoice?', a: 'Yes. Each tagged piece carries its HUID, and it prints on the tax invoice along with weight and purity. The tag stock / HUID report keeps you ready for any hallmarking check.' },
      { q: 'How are making charges calculated?', a: 'Per gram, as a percentage of the metal value, or a fixed amount per design — set once per item or category and changed on the bill when needed. Stone and diamond charges are added separately.' },
      { q: 'Can I send the bill to the customer on WhatsApp?', a: 'Yes. With the WhatsApp module the invoice PDF goes to the customer from your business number the moment the bill is saved, along with payment reminders and offers.' },
      { q: 'Does it handle estimates and sales returns?', a: 'Yes. Estimates for walk-in customers convert to a bill in one step, and sales returns and credit notes put the stock back and adjust GST automatically.' },
      { q: 'Can billing continue if the internet goes down?', a: 'Yes. DataCare Next runs on your counter computer, so billing never stops when the connection drops. The web ERP and owner app catch up when you are back online.' },
    ],
    related: ['jewellery-accounting-software', 'rfid-jewellery-software', 'jewellery-software-surat'],
  },
  {
    slug: 'jewellery-accounting-software',
    breadcrumb: 'Jewellery Accounting Software',
    metaTitle: 'Jewellery Accounting Software – Gold, Silver & Cash Ledgers',
    metaDescription:
      'Jewellery accounting software with gold fine, silver fine and amount in one ledger: rojmel, outstanding, balance sheet, P&L, GST, TDS/TCS and year-end.',
    eyebrow: 'Jewellery accounting software',
    h1: 'Jewellery Accounting Software that counts in rupees and grams',
    intro:
      'Ordinary accounting software understands only money. A jeweller’s hisab runs in rupees, gold fine and silver fine at the same time. DataCare Next keeps all three on every party ledger — supplier, karigar or wholesale customer — so you always have one correct balance, and your CA gets clean books at year-end.',
    proof: ['Metal + cash on every ledger', 'Balance sheet, P&L, GST, TDS / TCS', 'Day lock & automatic backup'],
    bodyTitle: 'One ledger, three balances',
    body: [
      'Every voucher in DataCare Next carries both metal and amount. A purchase from a bullion dealer, a rate-cut with a wholesaler, a karigar receipt or a customer’s old-gold exchange all post to the same double ledger, and the total fine report shows exactly how much gold and silver the business holds across stock, karigars and parties.',
      'The day-to-day books are built in: day book (rojmel), cash book, bank book, outstanding with customer last-visit, and other income and expenses. For the accountant there is a trial balance, balance sheet, profit & loss, GST reports and TDS / TCS. Day-wise data lock protects closed days, and the year-change process carries every balance forward cleanly into the new financial year.',
    ],
    visual: 'ledger',
    highlightsTitle: 'Accounting the way jewellers keep it',
    highlights: [
      { icon: 'BookOpenCheck', title: 'Metal + cash ledgers', text: 'Gold fine, silver fine and amount side by side on every party account.' },
      { icon: 'Landmark', title: 'Balance sheet & P&L', text: 'Final accounts, trial balance and trading report ready for your CA.' },
      { icon: 'FileCheck2', title: 'GST, TDS & TCS reports', text: 'Return-ready reports from the same entries you bill with — no re-typing.' },
      { icon: 'Wallet', title: 'Outstanding & reminders', text: 'Udhaar by party with last-visit dates and WhatsApp payment reminders.' },
      { icon: 'Lock', title: 'Day lock & audit trail', text: 'Lock closed days, control user rights and see who changed what.' },
      { icon: 'DatabaseBackup', title: 'Backup & year change', text: 'Built-in backup and a clean year-end that carries balances forward.' },
    ],
    featureGroup: 3,
    editions: ['Standard', 'Pro', 'Enterprise'],
    editionsNote: 'Ledgers and GST reports are in every edition; balance sheet, TDS / TCS and day lock start from Standard.',
    faqs: [
      { q: 'Is this a sona-chandi hisab software?', a: 'Yes. Every ledger keeps gold fine, silver fine and amount together, with rojmel, outstanding and total fine reports — the traditional hisab register, made accurate and searchable.' },
      { q: 'Does it show karigar balances in fine weight?', a: 'Yes. Metal issued to and received from each karigar is tracked in fine weight, so the balance, wastage and labour for every karigar is one click away.' },
      { q: 'Can my CA work from these reports?', a: 'Yes. Trial balance, balance sheet, profit & loss, GST and TDS / TCS reports can be printed or shared as PDF, and the day-wise lock means closed periods cannot change afterwards.' },
      { q: 'What about multiple companies or branches?', a: 'Multiple companies are supported from the Standard edition. Enterprise adds branch management with cash and stock inward / outward between stores and store-wise reports.' },
      { q: 'How is the data protected?', a: 'User rights limit what each staff member can see or change, day-wise data lock freezes closed days, Enterprise keeps a full user activity log, and backup is built into every edition.' },
    ],
    related: ['jewellery-billing-software', 'rfid-jewellery-software', 'jewellery-software-mumbai'],
  },
  {
    slug: 'rfid-jewellery-software',
    breadcrumb: 'RFID Jewellery Software',
    metaTitle: 'RFID Jewellery Software & Stock Counting Kit | DataCare Next',
    metaDescription:
      'RFID jewellery software: count the whole showroom in minutes with a Zebra handheld reader and find missing pieces the same day. Tags, reader, app and training.',
    eyebrow: 'RFID jewellery software',
    h1: 'RFID Jewellery Software — count the whole showroom in minutes',
    intro:
      'Tag by tag, a stock check in a busy showroom takes a day. With the DataCare RFID solution a handheld Zebra reader scans every piece on a counter from a short distance, matches it to DataCare Next and shows what is missing — in minutes, without taking a single piece out of the tray.',
    proof: ['Zebra reader + tags + app', 'Works with your barcode tags', 'Installed & trained by our team'],
    bodyTitle: 'RFID on top of the stock you already have',
    body: [
      'Each piece gets an RFID tag linked to its existing barcode tag number (tag mapping), so RFID adds to your current stock — nothing is re-entered. The DataCare RFID mobile app runs stock verification counter by counter, searches for a specific tag when a piece cannot be found, and reads a whole tray of items into an approval or transfer.',
      'Our team supplies the complete kit — tags, handheld reader and app — installs it, maps your current stock and trains the staff. RFID integration is available with the Enterprise edition of DataCare Next, and barcode and RFID work side by side, so you can roll it out one counter at a time.',
    ],
    visual: 'rfid',
    highlightsTitle: 'What the RFID kit does',
    highlights: [
      { icon: 'Radar', title: 'Full stock count in minutes', text: 'Sweep the reader over a counter; every tagged piece is counted at once.' },
      { icon: 'ScanSearch', title: 'Find a missing piece', text: 'Search for one tag and the reader beeps louder as you get closer.' },
      { icon: 'Layers', title: 'Keeps your barcode tags', text: 'RFID tags are mapped to your existing tag numbers — no re-entry.' },
      { icon: 'Smartphone', title: 'DataCare RFID mobile app', text: 'Stock verification, tag search and tag mapping on an Android phone.' },
      { icon: 'ShieldCheck', title: 'Same-day discrepancy', text: 'A missing piece shows up the same day, not at the year-end count.' },
      { icon: 'Users', title: 'Installed & trained by us', text: 'We supply the kit, map the stock and train your counter staff.' },
    ],
    featureGroup: 1,
    editions: ['Advance', 'Enterprise'],
    editionsNote: 'RFID integration is an add-on to the Enterprise edition. Barcode tagging is included in every edition.',
    faqs: [
      { q: 'Which RFID reader do you use?', a: 'A Zebra handheld RFID reader, supplied and configured by our team along with the tags and the DataCare RFID app.' },
      { q: 'Do I have to replace my barcode tags?', a: 'No. Each RFID tag is mapped to the piece’s existing barcode tag number, so your stock, reports and billing continue exactly as before.' },
      { q: 'Does RFID work on small pieces like rings and earrings?', a: 'Yes. Jewellery RFID tags are small hang-tags that attach like a barcode tag; we choose the tag type for your items during setup.' },
      { q: 'Which edition includes RFID?', a: 'RFID integration is available as an add-on with the Enterprise edition of DataCare Next. Ask for a quote with the number of counters and pieces you want to cover.' },
      { q: 'How long does a stock count take?', a: 'A counter with a few hundred tagged pieces is read in a few minutes; the whole showroom is verified counter by counter the same day, and the app shows any piece that did not scan.' },
    ],
    related: ['jewellery-billing-software', 'jewellery-accounting-software', 'jewellery-software-rajkot'],
  },
  {
    slug: 'jewellery-software-surat',
    breadcrumb: 'Jewellery Software in Surat',
    metaTitle: 'Jewellery Software in Surat for Diamond, Gold & Wholesale',
    metaDescription:
      'Jewellery software in Surat for diamond, gold and wholesale jewellers: GST & HUID billing, stone charges, approval / jangad, rate-cut vouchers, on-site training.',
    eyebrow: 'Jewellery software in Surat',
    h1: 'Jewellery Software in Surat for diamond, gold & wholesale jewellers',
    intro:
      'From Mahidharpura to Varachha, Surat’s jewellery trade runs on diamonds, wholesale and speed. DataCare Next gives Surat jewellers GST and HUID billing with separate stone charges, approval / jangad and rate-cut vouchers that carry metal and amount together, and barcode or RFID stock — with installation and training at your showroom.',
    proof: ['5,900+ jewellers across Gujarat', 'On-site installation & training', 'Support Mon–Sat, 10 AM – 7 PM'],
    bodyTitle: 'Built for how Surat trades',
    body: [
      'Surat wholesalers move goods on approval every day. DataCare Next issues and receives jangad by weight, tracks what is out with which party, and converts an approval into a sale or a return in one step. Rate-cut entries, wholesale sales with metal and amount in a single voucher, and VP parcel handling are all standard in the Pro edition.',
      'For diamond and stone-set jewellery, every item carries its stone details and charges separately from the metal, so billing and valuation stay accurate. Retail showrooms in Surat get the same fast scan-to-bill counter, old gold exchange, gold saving schemes and the owner mobile app as the rest of our 7,000+ customers.',
    ],
    visual: 'desktop',
    highlightsTitle: 'Why Surat jewellers choose DataCare Next',
    highlights: [
      { icon: 'Gem', title: 'Diamond & stone charges', text: 'Stone details and charges are recorded and billed separately from the metal.' },
      { icon: 'ArrowLeftRight', title: 'Approval / jangad', text: 'Issue and receive goods on approval by weight; nothing sent out is forgotten.' },
      { icon: 'Truck', title: 'Wholesale vouchers', text: 'Rate-cut and metal + amount in one voucher, built for the wholesale trade.' },
      { icon: 'Barcode', title: 'Barcode & RFID stock', text: 'Tag every piece; count a counter in minutes with the RFID add-on.' },
      { icon: 'Users', title: 'Training at your showroom', text: 'Our Ahmedabad team installs and trains on-site across Gujarat.' },
      { icon: 'Smartphone', title: 'Owner app', text: 'Sales, stock, ledgers and today’s rate on your phone, wherever you are.' },
    ],
    featureGroup: 1,
    editions: ['Standard', 'Pro', 'Enterprise'],
    editionsNote: 'Most Surat wholesalers start with Pro; retail showrooms with Standard or Ultra.',
    city: { name: 'Surat', state: 'Gujarat', nearby: ['Surat', 'Navsari', 'Bardoli', 'Vyara', 'Valsad', 'Vapi', 'Ankleshwar', 'Bharuch'] },
    faqs: [
      { q: 'Do you install jewellery software in Surat?', a: 'Yes. Our team visits Surat for installation, data setup and staff training. Day-to-day support is on phone, WhatsApp and remote desktop from our Ahmedabad head office, Monday to Saturday, 10 AM to 7 PM.' },
      { q: 'Does it handle diamond jewellery with stone charges?', a: 'Yes. Each piece carries its stone details and charges separately from the gold or silver, so bills, estimates and stock valuation stay correct for diamond and stone-set jewellery.' },
      { q: 'Can I manage approval / jangad for my wholesale parties?', a: 'Yes. Approval issue and receive is in every edition, with complete weight tracking, so you always know which pieces are out with which party.' },
      { q: 'Which edition suits a Surat wholesaler?', a: 'The Pro edition — it adds girvi / loan, dead stock and weight-range stock movement on top of wholesale rate-cut vouchers. Book a demo and we will show it with your own stock.' },
    ],
    related: ['jewellery-billing-software', 'rfid-jewellery-software', 'jewellery-software-rajkot'],
  },
  {
    slug: 'jewellery-software-rajkot',
    breadcrumb: 'Jewellery Software in Rajkot',
    metaTitle: 'Jewellery Software in Rajkot for Imitation, Silver & Gold',
    metaDescription:
      'Jewellery software in Rajkot for imitation, silver and gold jewellers: bulk barcode tags, brand-wise MRP, karigar tracking, GST billing, on-site training.',
    eyebrow: 'Jewellery software in Rajkot',
    h1: 'Jewellery Software in Rajkot for imitation, silver & gold jewellers',
    intro:
      'Rajkot is India’s imitation jewellery capital and a major silver and gold manufacturing centre. DataCare Next handles high-volume imitation and silver businesses — bulk barcode generation, brand-wise MRP and discounts, employee-wise sales — and the karigar, melting and fine-weight tracking that Rajkot’s gold manufacturers need.',
    proof: ['5,900+ jewellers across Gujarat', 'Bulk barcode & MRP billing', 'On-site training across Saurashtra'],
    bodyTitle: 'Imitation, silver and gold — one software',
    body: [
      'For imitation and silver jewellery, speed and volume matter: generate hundreds of barcode tags in one go, bill by MRP or by weight, set brand-wise discounts, and see sales by employee and by counter. For gold, the same software runs scan-to-bill with today’s rate, HUID on the invoice, old gold exchange and gold saving schemes.',
      'Rajkot’s manufacturers get karigar issue and receipt in fine weight, melting and refinery tracking, labour invoices and employee salary — so the gap between metal issued and metal received is always explained. Our team installs and trains at your shop in Rajkot and across Saurashtra, with phone, WhatsApp and remote support from Ahmedabad.',
    ],
    visual: 'desktop',
    highlightsTitle: 'Why Rajkot jewellers choose DataCare Next',
    highlights: [
      { icon: 'Tags', title: 'Bulk barcode & MRP', text: 'Generate tags in bulk and bill imitation jewellery by MRP with brand-wise discounts.' },
      { icon: 'Sparkles', title: 'Imitation & silver', text: 'Volume billing, employee-wise sales and tag-wise tracking for high-turnover shops.' },
      { icon: 'Hammer', title: 'Karigar & manufacturing', text: 'Fine-weight balance per karigar, melting loss, labour invoices and salary.' },
      { icon: 'Store', title: 'Counter-wise stock', text: 'Know which counter holds what; verify stock counter by counter.' },
      { icon: 'MessageCircle', title: 'WhatsApp bills & offers', text: 'Send invoices, reminders and new designs from your business number.' },
      { icon: 'Users', title: 'Training at your shop', text: 'Installation and training on-site in Rajkot and nearby towns.' },
    ],
    featureGroup: 0,
    editions: ['Basic', 'Standard', 'Advance'],
    editionsNote: 'Imitation and silver shops usually start with Basic or Standard; gold manufacturers with Advance.',
    city: { name: 'Rajkot', state: 'Gujarat', nearby: ['Rajkot', 'Morbi', 'Gondal', 'Jetpur', 'Dhoraji', 'Wankaner', 'Jasdan', 'Jamnagar', 'Junagadh'] },
    faqs: [
      { q: 'Is DataCare Next suitable for an imitation jewellery business in Rajkot?', a: 'Yes. Bulk barcode generation, MRP billing with brand-wise discounts, employee-wise sales and tag-wise tracking are built for high-volume imitation and silver jewellery shops.' },
      { q: 'Can I bill silver by weight and keep silver fine in the ledger?', a: 'Yes. Silver is billed by weight with today’s rate, and every party ledger keeps silver fine alongside gold fine and amount.' },
      { q: 'Does it track karigar gold for manufacturers?', a: 'Yes. Issue gold, silver and stones to each karigar, receive finished pieces, and see wastage, labour and the fine-weight balance per karigar — plus melting and refinery tracking.' },
      { q: 'Do you provide support in Rajkot?', a: 'Yes. Our team installs and trains on-site in Rajkot and across Saurashtra, and support is on phone, WhatsApp and remote desktop, Monday to Saturday.' },
    ],
    related: ['rfid-jewellery-software', 'jewellery-billing-software', 'jewellery-software-surat'],
  },
  {
    slug: 'jewellery-software-mumbai',
    breadcrumb: 'Jewellery Software in Mumbai',
    metaTitle: 'Jewellery Software in Mumbai – Multi-Branch, Wholesale & GST',
    metaDescription:
      'Jewellery software in Mumbai for showrooms, chains and Zaveri Bazaar wholesalers: multi-branch stock & cash, GST & e-invoice, metal + cash ledgers, web ERP.',
    eyebrow: 'Jewellery software in Mumbai',
    h1: 'Jewellery Software in Mumbai for showrooms, chains & wholesalers',
    intro:
      'From Zaveri Bazaar wholesalers to multi-showroom chains across Mumbai, Thane and Pune, DataCare Next runs the whole business in one place: GST and e-invoice billing, branch-wise stock and cash, metal + cash ledgers and the web-based ERP you can open from any branch — with 400+ jewellers already using it across Maharashtra.',
    proof: ['400+ jewellers in Maharashtra', 'Multi-branch & multi-company', 'On-site installation & training'],
    bodyTitle: 'One system across every branch',
    body: [
      'The Enterprise edition is built for Mumbai’s chains: cash and stock inward / outward between branches, store-wise reports, customer loyalty, employee targets and incentives, bill-wise and item-wise profit, and a full user activity log so the owner sees who changed what and when. The web-based ERP at datacareweb.com opens the same live data from any branch or from home.',
      'Wholesalers get approval / jangad, rate-cut and metal + amount vouchers; retailers get scan-to-bill with HUID, old gold exchange, gold saving schemes and WhatsApp invoices. Installation, data setup and training are done on-site at your showroom, and support is in Hindi, Gujarati and English on phone, WhatsApp and remote desktop.',
    ],
    visual: 'desktop',
    highlightsTitle: 'Why Mumbai jewellers choose DataCare Next',
    highlights: [
      { icon: 'Network', title: 'Multi-branch control', text: 'Stock and cash in / out between stores, store-wise reports, one owner view.' },
      { icon: 'Building2', title: 'Multi-company', text: 'Run several firms from one login with separate books and GST.' },
      { icon: 'FileCheck2', title: 'GST & e-invoice', text: 'E-invoice and e-credit notes for businesses above the turnover limit.' },
      { icon: 'History', title: 'User activity log', text: 'Every edit and delete is logged; approve staff change requests.' },
      { icon: 'Globe', title: 'Web-based ERP', text: 'Open billing, stock and ledgers in a browser from any branch.' },
      { icon: 'Smartphone', title: 'Owner app (Android & iOS)', text: 'Today’s sales, stock and cash across branches on your phone.' },
    ],
    featureGroup: 4,
    editions: ['Pro', 'Advance', 'Enterprise'],
    editionsNote: 'Chains and large showrooms run Enterprise; single showrooms and wholesalers usually start with Pro.',
    city: { name: 'Mumbai', state: 'Maharashtra', nearby: ['Mumbai', 'Thane', 'Pune', 'Nashik', 'Kolhapur', 'Nagpur'] },
    faqs: [
      { q: 'Do you support jewellers in Mumbai?', a: 'Yes. Over 400 jewellers across Maharashtra use DataCare Next. Installation, data setup and training are done on-site at your showroom, anywhere in Maharashtra, and support is on phone, WhatsApp and remote desktop.' },
      { q: 'Can one owner see all showrooms together?', a: 'Yes. The Enterprise edition gives branch-wise and consolidated reports, stock and cash transfers between stores, and the owner app shows every branch on one phone.' },
      { q: 'Is e-invoice supported?', a: 'Yes. E-invoice and e-credit notes are available as an add-on from the Basic edition upwards, for businesses above the GST e-invoice turnover limit.' },
      { q: 'In which languages is support available?', a: 'Hindi, Gujarati and English, Monday to Saturday, 10 AM to 7 PM.' },
    ],
    related: ['jewellery-accounting-software', 'jewellery-billing-software', 'rfid-jewellery-software'],
  },
];

export const landingBySlug = Object.fromEntries(landingPages.map((p) => [p.slug, p]));
