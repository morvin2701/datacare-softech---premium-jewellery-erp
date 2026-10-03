# datacaresoftech.com — DataCare Next website

Single-page, SEO-first website for DataCare Softech, built from the
"Single-Page Website Content & SEO Blueprint" (Oct 2026). Next.js 15 + Tailwind,
exported as plain static HTML — every word is in the HTML source for Google.

## Run / build

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the finished static site to /out
npm start          # preview /out at http://localhost:3000 (exactly what the host will serve)
```

Don't open `out/index.html` by double-clicking — the browser can't load the styles and
scripts from `file://`. Always preview with `npm start` or `npm run dev`.

**Deploy:** upload the contents of `out/` to the web root of www.datacaresoftech.com
(same hosting as the old site — Microsoft IIS). No Node server is needed.

The host is IIS, so `out/web.config` must go up with the site: it adds the
`.webp` / `.woff2` MIME types (without it every image 404s), the branded 404
page and browser caching. If IIS shows "500.19" after upload, remove the
`<httpErrors>` block from web.config and retry.

Delete the old site's files from the web root first; the old `assets/js/*.js`
bundle and the old `index.html` must not remain.

**Nothing in this repo affects Google until `out/` is live.**

After going live: Google Search Console → submit `https://www.datacaresoftech.com/sitemap.xml`
→ URL Inspection → Request indexing. To add the Search Console verification tag, set
`NEXT_PUBLIC_GSC_VERIFICATION=<code>` before `npm run build`.

## Where to change things

| What | File |
| --- | --- |
| Years, customers, Google rating, address, email, hours, social & app links | `lib/site.js` → `company` |
| Team (leaders, Dubai FZCO, members, phone numbers, photos) | `lib/site.js` |
| All page copy: features, plans matrix, FAQ, cities, hardware | `lib/content.js` |
| Landing pages (`/jewellery-billing-software/`, `/jewellery-software-surat/` …): copy, FAQs, meta | `lib/landing.js` — add an entry and it is built, linked in the footer list you choose, and added to the sitemap |
| Map: state counts and cities | `lib/coverage.js` |
| Testimonials (leave empty rather than invent) | `components/Reviews.jsx` |
| Title / meta description / analytics IDs | `app/layout.jsx` |

**Team photos:** put a square image in `public/team/` (e.g. `hemal-soni.webp`) and set
`photo: '/team/hemal-soni.webp'` on that person in `lib/site.js`. Without a photo a gold
monogram is shown.

**New screenshots:** add the source file to `scripts/optimize-images.mjs`, run
`npm run images`, then reference `/images/<name>.webp` in `lib/content.js`.

## Rules (from the SEO blueprint)

- One H1 (hero). Each section is an H2 with an `id`; cards are H3.
- Only claim features in `public/versionlist.pdf` or confirmed by the product team.
- No self-added review stars in schema. One consistent set of numbers everywhere.
- No single "main" phone number — Call / WhatsApp buttons open the team directory.

