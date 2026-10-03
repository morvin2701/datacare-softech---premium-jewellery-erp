import Image from 'next/image';
import { phoneScreens } from '@/lib/content';

// Decorative, animated product illustrations for the deep-dive blocks.
// All are CSS/SVG only — no JavaScript, no layout shift.

const frame = 'relative flex h-full w-full min-h-[26rem] flex-col justify-between gap-6 overflow-hidden rounded-[1.75rem] border border-white/10 dark-surface p-6 sm:p-8 xl:p-10 shadow-lift';

// Window-style header strip so each visual reads as a real DataCare screen.
function Chrome({ title, badge }) {
  return (
    <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-4">
      <div className="flex items-center gap-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <p className="text-sm font-semibold text-white/85">{title}</p>
      </div>
      {badge ? <span className="rounded-full bg-gold/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-gold-light ring-1 ring-gold/30">{badge}</span> : null}
    </div>
  );
}

function StatusRow({ items }) {
  return (
    <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-[0.72rem] text-white/50">
      {items.map((t) => (
        <span key={t} className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> {t}
        </span>
      ))}
    </div>
  );
}

export function BillingVisual() {
  const fields = [
    ['Item', 'Bangle 22K (916)'],
    ['Gross / Net wt', '17.900 / 17.900 g'],
    ['HUID', 'Verified ✓'],
    ['Rate', 'Today’s rate'],
    ['Making', '₹ 450 / g'],
    ['GST', '3% auto'],
  ];
  return (
    <div className={frame} aria-hidden="true">
      <div className="grid-lines absolute inset-0" />
      <Chrome title="New Sale · Counter 1 · Bill #1043" badge="Scan to bill" />
      <div className="relative grid items-center gap-6 sm:grid-cols-[0.8fr_1fr]">
        <div className="relative mx-auto w-44 rounded-xl bg-white p-4 text-ink shadow-lift">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">Jewellery tag</p>
          <p className="mt-1 font-display text-lg">BGG00007</p>
          <div className="mt-3 flex h-12 items-end gap-[2px]">
            {Array.from({ length: 34 }).map((_, i) => (
              <span key={i} className="bg-ink" style={{ width: i % 3 === 0 ? 3 : 1.5, height: `${70 + ((i * 37) % 30)}%` }} />
            ))}
          </div>
          <p className="mt-2 text-[0.7rem] text-ink-faint">17.900 g · 916</p>
          <span className="absolute inset-x-2 h-0.5 rounded bg-red-500 shadow-[0_0_14px_3px_rgba(239,68,68,.6)]" style={{ animation: 'scan-line 2.4s ease-in-out infinite' }} />
        </div>
        <ul className="space-y-2">
          {fields.map(([k, v], i) => (
            <li
              key={k}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80"
              style={{ animation: `twinkle-row 4.8s ${i * 0.35}s ease-in-out infinite` }}
            >
              <span className="truncate text-white/50">{k}</span>
              <span className="shrink-0 font-semibold text-gold-light">{v}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex items-center justify-between rounded-xl bg-navy px-4 py-3 ring-1 ring-gold/30">
        <span className="text-[0.68rem] uppercase tracking-[0.16em] text-white/60">Net payable · GST incl.</span>
        <span className="font-display text-2xl text-gold-light">₹ 1,13,960</span>
      </div>
      <StatusRow items={['HUID verified', 'Rate synced 10:02 AM', 'Print · WhatsApp ready']} />
    </div>
  );
}

export function LedgerVisual() {
  const rows = [
    ['Opening balance', '₹ 4,92,850', '125.400', '2,450.0'],
    ['Sale – Bill #1042', '₹ 1,13,960', '−12.320', '—'],
    ['Karigar receipt', '—', '+48.250', '—'],
    ['Old gold exchange', '− ₹ 43,000', '+4.580', '—'],
    ['Silver purchase', '− ₹ 78,000', '—', '+850.0'],
  ];
  return (
    <div className={frame} aria-hidden="true">
      <Chrome title="Party Ledger · Kalyan Jewellers (Supplier)" badge="Fine weight" />
      <div className="relative">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <div className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr] bg-white/10 px-3 py-2 text-[0.65rem] uppercase tracking-[0.14em] text-white/55">
            <span>Entry</span><span className="text-right">Amount</span><span className="text-right">Gold g</span><span className="text-right">Silver g</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r[0]}
              className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr] border-t border-white/5 px-3 py-2.5 text-[0.78rem] text-white/80"
              style={{ animation: `row-glow 6s ${i * 1.1}s ease-in-out infinite` }}
            >
              <span className="truncate">{r[0]}</span>
              <span className="text-right tabular-nums">{r[1]}</span>
              <span className="text-right tabular-nums text-gold-light">{r[2]}</span>
              <span className="text-right tabular-nums text-slate-300">{r[3]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[['Amount', '₹ 4,85,810'], ['Gold fine', '165.910 g'], ['Silver fine', '3,300.0 g']].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white/5 px-2 py-3 ring-1 ring-white/10">
              <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/50">{k}</p>
              <p className="mt-1 font-display text-base text-gold-light">{v}</p>
            </div>
          ))}
        </div>
      </div>
      <StatusRow items={['Day locked till 30 Sep', 'Backup 11:58 PM', 'FY 2026-27']} />
    </div>
  );
}

export function RfidVisual() {
  const tags = [
    [22, 30], [68, 22], [80, 58], [35, 72], [55, 45], [15, 55], [72, 80], [45, 18], [28, 42], [62, 66],
  ];
  return (
    <div className={frame} aria-hidden="true">
      <Chrome title="Stock Verification · Showroom 1" badge="RFID count" />
      <div className="relative mx-auto aspect-square w-full max-w-[24rem]">
        {[1, 0.72, 0.44].map((s) => (
          <span key={s} className="absolute inset-0 m-auto rounded-full border border-gold/20" style={{ width: `${s * 100}%`, height: `${s * 100}%` }} />
        ))}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(201,162,75,.45), transparent 22%)',
            animation: 'radar 3.2s linear infinite',
          }}
        />
        {tags.map(([x, y], i) => (
          <span key={i} className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
            <span className="absolute inset-0 rounded-full bg-gold-light" style={{ animation: `ping-soft 3.2s ${(i * 0.32).toFixed(2)}s ease-out infinite` }} />
            <span className="absolute inset-0 rounded-full bg-gold" />
          </span>
        ))}
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-[0.6rem] font-bold uppercase tracking-widest text-gold-light ring-2 ring-gold/50">
          RFID
        </span>
      </div>
      <div className="relative mt-6 grid grid-cols-3 gap-3 text-center">
        {[['Scanned', '1,248'], ['Expected', '1,250'], ['Missing', '2']].map(([k, v], i) => (
          <div key={k} className={`rounded-xl px-2 py-3 ring-1 ${i === 2 ? 'bg-red-500/10 ring-red-400/30' : 'bg-white/5 ring-white/10'}`}>
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/50">{k}</p>
            <p className={`mt-1 font-display text-xl ${i === 2 ? 'text-red-300' : 'text-gold-light'}`}>{v}</p>
          </div>
        ))}
      </div>
      <StatusRow items={['Counted in 4 min 12 s', 'Reader connected', '2 tags to locate']} />
    </div>
  );
}

export function KarigarVisual() {
  const nodes = [
    { x: 60, y: 60, name: 'Karigar A', bal: '42.150 g' },
    { x: 340, y: 60, name: 'Karigar B', bal: '18.400 g' },
    { x: 60, y: 260, name: 'Melting', bal: 'Loss 0.42%' },
    { x: 340, y: 260, name: 'Jadtar', bal: '26.900 g' },
  ];
  return (
    <div className={frame} aria-hidden="true">
      <Chrome title="Karigar Issue / Receipt · Fine balance" badge="Live" />
      <svg viewBox="0 0 400 320" className="relative w-full">
        {nodes.map((n, i) => (
          <g key={n.name}>
            <line x1="200" y1="160" x2={n.x} y2={n.y} stroke="rgba(201,162,75,.25)" strokeWidth="2" />
            <line
              x1="200" y1="160" x2={n.x} y2={n.y}
              stroke="#E3C47A" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round"
              style={{ animation: `dash 1.6s linear ${i * 0.2}s infinite${i % 2 ? ' reverse' : ''}` }}
            />
          </g>
        ))}
        <circle cx="200" cy="160" r="46" fill="#0A1120" stroke="#C9A24B" strokeWidth="2" />
        <text x="200" y="154" textAnchor="middle" fill="#F4EBD3" fontSize="13" fontWeight="600">Your shop</text>
        <text x="200" y="174" textAnchor="middle" fill="#E3C47A" fontSize="11">Fine balance</text>
        {nodes.map((n) => (
          <g key={n.name + 't'}>
            <rect x={n.x - 52} y={n.y - 26} width="104" height="52" rx="12" fill="#111B2E" stroke="rgba(255,255,255,.12)" />
            <text x={n.x} y={n.y - 4} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">{n.name}</text>
            <text x={n.x} y={n.y + 14} textAnchor="middle" fill="#E3C47A" fontSize="11">{n.bal}</text>
          </g>
        ))}
      </svg>
      <div className="relative mt-2 grid grid-cols-3 gap-3 text-center">
        {[['Issued', '250.000 g'], ['Received', '247.850 g'], ['Wastage', '2.150 g']].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/5 px-2 py-3 ring-1 ring-white/10">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/50">{k}</p>
            <p className="mt-1 font-display text-base text-gold-light">{v}</p>
          </div>
        ))}
      </div>
      <StatusRow items={['Loss 0.86% this month', '4 karigars active', 'Labour invoice ready']} />
    </div>
  );
}

export function PhoneVisual() {
  return (
    <div className={`${frame} !flex-row items-center !justify-center gap-6`}>
      <div className="relative w-[13.5rem] shrink-0 rounded-[2.2rem] border-[7px] border-navy-muted bg-navy shadow-lift sm:w-[15rem] xl:w-[17rem]">
        <div className="relative aspect-[560/1214] overflow-hidden rounded-[1.7rem] bg-white">
          {phoneScreens.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={`DataCare jewellery mobile app – ${s.alt}`}
              fill
              sizes="240px"
              loading="lazy"
              className="object-cover"
              style={{ opacity: i === 0 ? 1 : 0, animation: `crossfade 18s ${i * 3}s infinite` }}
            />
          ))}
        </div>
        <span className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-navy" aria-hidden="true" />
      </div>
      <div className="hidden flex-col gap-4 sm:flex" aria-hidden="true">
        {['Today’s rate', 'Cash on hand', 'Tag stock + photos', 'Ledger · gold · silver', 'Gold scheme'].map((t, i) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80" style={{ animation: `float ${6 + i}s ease-in-out ${i * 0.4}s infinite` }}>
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
