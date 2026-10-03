'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Loader2, MapPin } from 'lucide-react';
import { INDIA, project, slug } from '@/lib/geo';
import { states, totalCities, totalCustomers } from '@/lib/coverage';

const byName = Object.fromEntries(states.map((s) => [s.name, s]));
const maxCount = Math.max(...states.map((s) => s.count));
const fmt = (n) => n.toLocaleString('en-IN');

// Fill strength grows with the log of the count so Gujarat doesn't flatten everyone else.
const tint = (count) => 0.12 + 0.55 * (Math.log(count + 1) / Math.log(maxCount + 1));

// Rough on-screen size of each state (India-map units) → how far to zoom in.
function zoomFor(d) {
  const nums = d.match(/-?\d+(\.\d+)?/g).map(Number);
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (let i = 0; i < nums.length; i += 2) {
    minX = Math.min(minX, nums[i]); maxX = Math.max(maxX, nums[i]);
    minY = Math.min(minY, nums[i + 1]); maxY = Math.max(maxY, nums[i + 1]);
  }
  return Math.min(6, Math.max(2.2, 700 / Math.max(maxX - minX, maxY - minY)));
}

export default function IndiaMap() {
  const [selected, setSelected] = useState(null); // state name or null
  const [hover, setHover] = useState(null);
  const [geo, setGeo] = useState(null); // loaded district map for `selected`

  const pins = useMemo(() => states.map((s) => ({ ...s, xy: project(INDIA, s.lon, s.lat) })), []);
  const sel = selected ? byName[selected] : null;
  const hovered = hover ? byName[hover] : null;

  // Load the selected state's district outlines on demand (one small file per state).
  useEffect(() => {
    if (!selected) return;
    let alive = true;
    setGeo(null);
    import(`@/lib/geo/${slug(selected)}.js`).then((m) => alive && setGeo(m.default)).catch(() => alive && setGeo(false));
    return () => { alive = false; };
  }, [selected]);

  const cities = useMemo(
    () => (sel && geo ? sel.cities.map((c) => ({ ...c, xy: project(geo, c.lon, c.lat) })) : []),
    [sel, geo]
  );
  const focus = sel ? project(INDIA, sel.lon, sel.lat) : [500, 560];
  const zoom = sel ? zoomFor(INDIA.paths[sel.name] || 'M0 0L100 100') : 1;
  const showState = Boolean(sel && geo);

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_20rem]">
      {/* Map stage */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-light/40 p-4 sm:p-6">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          {sel ? (
            <button type="button" onClick={() => setSelected(null)} className="btn-ghost-dark !min-h-[2.4rem] !px-4 text-xs">
              <ArrowLeft size={14} aria-hidden="true" /> Back to India
            </button>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy/70 px-4 py-1.5 text-xs font-semibold text-gold-light">
              <MapPin size={13} aria-hidden="true" /> Click any state to see its cities
            </span>
          )}
          <p className="text-xs text-white/55" aria-live="polite">
            {sel
              ? `${sel.name} · ${fmt(sel.count)} installations · ${sel.cities.length} ${sel.cities.length === 1 ? 'city' : 'cities'}`
              : hovered
                ? `${hovered.name} · ${fmt(hovered.count)} installations · click to open`
                : `${states.length} states & UTs · ${fmt(totalCustomers)}+ jewellers`}
          </p>
        </div>

        <div className="relative mt-3 aspect-square w-full sm:aspect-[1000/900]">
          {/* India */}
          <svg
            viewBox={`0 0 ${INDIA.w} ${INDIA.h}`}
            role="img"
            aria-label="Map of India showing states where DataCare Next jewellery software is installed"
            className={`absolute inset-0 h-full w-full transition-all duration-700 ease-premium ${sel ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            style={{
              transformOrigin: `${(focus[0] / INDIA.w) * 100}% ${(focus[1] / INDIA.h) * 100}%`,
              transform: sel ? `scale(${zoom})` : 'scale(1)',
            }}
          >
            <defs>
              <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>
            <g>
              {Object.entries(INDIA.paths).map(([name, d]) => {
                const s = byName[name];
                const active = hover === name;
                return (
                  <path
                    key={name}
                    d={d}
                    onMouseEnter={() => setHover(name)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => s && setSelected(name)}
                    className={`map-state transition-all duration-300 ${s ? 'cursor-pointer' : ''}`}
                    fill={s ? `rgba(201,162,75,${active ? Math.min(0.9, tint(s.count) + 0.25) : tint(s.count)})` : 'rgba(255,255,255,0.05)'}
                    stroke={active ? '#F1D58E' : 'rgba(201,162,75,0.45)'}
                    strokeWidth={active ? 2.2 : 1}
                    strokeLinejoin="round"
                  >
                    <title>{s ? `${name}: ${fmt(s.count)} installations — click to see cities` : name}</title>
                  </path>
                );
              })}
            </g>
            <g className="pointer-events-none">
              {pins.map((p, i) => {
                const [x, y] = p.xy;
                const label = p.count >= 1000 ? `${(p.count / 1000).toFixed(1)}K` : String(p.count);
                const w = 18 + label.length * 9;
                const big = p.count === maxCount;
                const lit = hover === p.name;
                return (
                  <g key={p.name} transform={`translate(${x} ${y})`}>
                    <g className="map-pin" style={{ animationDelay: `${i * 60}ms` }}>
                      {big ? <circle r="30" fill="rgba(241,213,142,0.35)" style={{ animation: 'ping-soft 2.4s ease-out infinite' }} /> : null}
                      <circle r={big ? 5 : 3.5} fill="#F1D58E" />
                      <g transform={`translate(0 ${big ? -44 : -34}) scale(${lit ? 1.15 : 1})`} filter="url(#pin-shadow)" style={{ transition: 'transform .3s' }}>
                        <rect x={-w / 2 - (big ? 4 : 0)} y={-14} width={w + (big ? 8 : 0)} height={big ? 30 : 26} rx="8" fill={big || lit ? '#C9A24B' : '#0A1120'} stroke={big || lit ? '#F1D58E' : 'rgba(201,162,75,0.6)'} strokeWidth="1.2" />
                        <path d={`M-5 ${big ? 16 : 12} L0 ${big ? 22 : 18} L5 ${big ? 16 : 12}Z`} fill={big || lit ? '#C9A24B' : '#0A1120'} />
                        <text textAnchor="middle" y={big ? 7 : 5} fontSize={big ? 15 : 13} fontWeight="700" fill={big || lit ? '#0A1120' : '#F4EBD3'} fontFamily="Inter, system-ui, sans-serif">
                          {label}
                        </text>
                      </g>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Selected state */}
          {sel && geo === null ? (
            <div className="absolute inset-0 flex items-center justify-center text-gold-light">
              <Loader2 size={28} className="animate-spin" aria-label="Loading map" />
            </div>
          ) : null}
          {showState ? (
            <svg
              key={sel.name}
              viewBox={`-20 -20 ${geo.w + 40} ${geo.h + 40}`}
              role="img"
              aria-label={`Map of ${sel.name} showing cities where DataCare Next is installed`}
              className="absolute inset-0 h-full w-full"
              style={{ animation: 'state-in 0.6s var(--ease) both' }}
            >
              <g>
                {Object.entries(geo.paths).map(([name, d]) => (
                  <path key={name} d={d} fill="rgba(201,162,75,0.16)" stroke="rgba(241,213,142,0.55)" strokeWidth="1.3" strokeLinejoin="round" className="transition-colors duration-300 hover:fill-[rgba(201,162,75,0.32)]">
                    <title>{name}</title>
                  </path>
                ))}
              </g>
              <g>
                {cities.map((c, i) => {
                  const [x, y] = c.xy;
                  const fs = c.hq ? 17 : 12.5;
                  return (
                    <g key={c.name} transform={`translate(${x} ${y})`}>
                      <g className="map-city" style={{ animationDelay: `${150 + i * 35}ms` }}>
                        <circle r={c.hq ? 26 : 14} fill={c.hq ? 'rgba(241,213,142,0.35)' : 'rgba(241,213,142,0.25)'} style={{ animation: `ping-soft ${c.hq ? 2.2 : 3}s ease-out ${(i % 7) * 0.4}s infinite` }} />
                        <circle r={c.hq ? 7 : 4.5} fill={c.hq ? '#F1D58E' : '#C9A24B'} stroke="#0A1120" strokeWidth="1.5" />
                        <text
                          x={c.anchor === 'end' ? -(c.hq ? 12 : 8) : c.hq ? 12 : 8}
                          y={4 + (c.dy || 0)}
                          textAnchor={c.anchor || 'start'}
                          fontSize={fs}
                          fontWeight={c.hq ? 700 : 500}
                          fill={c.hq ? '#F1D58E' : 'rgba(255,255,255,0.85)'}
                          fontFamily="Inter, system-ui, sans-serif"
                          style={{ paintOrder: 'stroke', stroke: '#0A1120', strokeWidth: 3, strokeLinejoin: 'round' }}
                        >
                          {c.name}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </g>
            </svg>
          ) : null}
          {sel && geo === false ? <p className="absolute inset-0 flex items-center justify-center text-sm text-white/60">Map unavailable for {sel.name}.</p> : null}
        </div>
      </div>

      {/* Side panel */}
      <aside className="flex max-h-[44rem] flex-col rounded-[1.75rem] border border-white/10 bg-navy-light/40 p-6 lg:max-h-none">
        <p className="eyebrow !text-gold-light">{sel ? `${sel.name} cities` : 'State-wise installations'}</p>
        {sel ? (
          <>
            <p className="mt-3 font-display text-2xl text-white">{fmt(sel.count)}+ jewellers in {sel.name}</p>
            <p className="mt-1 text-sm text-white/55">
              {sel.name === 'Gujarat' ? 'Our home state — head office in Ahmedabad, on-site support across Gujarat.' : 'Installation, training and support handled remotely, with visits on request.'}
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5 overflow-y-auto">
              {sel.cities.map((c) => (
                <li key={c.name} className={`rounded-full px-2.5 py-1 text-xs ${c.hq ? 'bg-gold font-semibold text-navy' : 'border border-white/10 text-white/80'}`}>
                  {c.name}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setSelected(null)} className="btn-ghost-dark mt-5 !min-h-[2.4rem] text-xs">
              <ArrowLeft size={14} aria-hidden="true" /> All states
            </button>
          </>
        ) : (
          <>
            <p className="mt-3 font-display text-2xl text-white">
              {fmt(totalCustomers)}+ jewellers · {totalCities} cities
            </p>
            <p className="mt-1 text-sm text-white/55">Click a state to zoom in and see every city.</p>
            <ol className="mt-5 space-y-1 overflow-y-auto pr-1 text-sm">
              {states.map((s) => (
                <li key={s.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setHover(s.name)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setSelected(s.name)}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 text-left transition ${hover === s.name ? 'bg-gold/15 text-white' : 'text-white/75 hover:bg-white/5'}`}
                  >
                    <span className="inline-flex items-center gap-2 truncate">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/70" aria-hidden="true" />
                      {s.name}
                      <span className="text-[0.68rem] text-white/40">{s.cities.length} {s.cities.length === 1 ? 'city' : 'cities'}</span>
                    </span>
                    <span className="shrink-0 font-semibold tabular-nums text-gold-light">{fmt(s.count)}</span>
                  </button>
                </li>
              ))}
            </ol>
          </>
        )}
        <p className="mt-5 border-t border-white/10 pt-4 text-xs text-white/45">
          Also serving jewellers in Dubai &amp; the UAE through Datacare Softech FZCO.
        </p>
      </aside>
    </div>
  );
}
