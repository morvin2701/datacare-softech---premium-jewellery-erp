export const dynamic = 'force-static';

import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'DataCare Next – Jewellery Software in India for retail, wholesale & manufacturing jewellers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'app/apple-icon.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  const chips = ['GST & HUID Billing', 'Barcode & RFID', 'Karigar', 'Gold Scheme', 'Mobile App'];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'radial-gradient(circle at 15% 0%, #3a2f17 0%, #0A1120 55%)',
          color: 'white',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={logoSrc} width={72} height={72} style={{ borderRadius: 16 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>DataCare Softech</div>
            <div style={{ fontSize: 22, color: '#E3C47A' }}>DataCare Next ERP · Ahmedabad</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 600, maxWidth: 980 }}>
            Jewellery Software for Indian Jewellers
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 34, flexWrap: 'wrap' }}>
            {chips.map((c) => (
              <div
                key={c}
                style={{
                  fontSize: 24,
                  padding: '10px 22px',
                  borderRadius: 999,
                  border: '1.5px solid rgba(227,196,122,.5)',
                  color: '#F4EBD3',
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#cbd2dd' }}>
          <div>17+ years · 7,000+ customers</div>
          <div style={{ color: '#E3C47A' }}>datacaresoftech.com</div>
        </div>
      </div>
    ),
    size
  );
}
