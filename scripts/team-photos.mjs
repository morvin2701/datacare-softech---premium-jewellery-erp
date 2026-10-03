// Builds consistent team avatars: every photo is cropped so the face has the
// same size and position in the circle. Face boxes come from Apple Vision
// (scripts/faces.swift, runs locally). Output: public/team/<slug>.webp (320px).
// Run: node scripts/team-photos.mjs
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync } from 'node:fs';

const FACE_RATIO = 0.34; // face height as a share of the crop side
const EYE_LINE = 0.47;   // face centre sits this far down the crop

const files = readdirSync('assets/team');
const byId = (id) => `assets/team/${files.find((f) => f.startsWith(`${id}-`))}`;
const people = {
  'sanjay-vekariya': 'assets/team/new-sanjaybhai-cut.png',
  'vikas-barvadiya': 'assets/team/new-vikas-barvadiya-white.png',
  'hemal-soni': byId('01'), 'vishal-gundalia': byId('02'), 'devendra-dobariya': byId('10'), 'ajay-kambaliya': byId('08'),
  'shreyash-thummar': byId('13'), 'morvin-vekariya': byId('18'),
  'kunarth-soni': byId('04'), 'kishor-jhavandhra': byId('06'), 'prakash-soni': byId('07'), 'dipak-dobariya': byId('09'),
  'sachin-vora': byId('14'), 'parth-hirani': byId('15'), 'pankaj-barvadiya': byId('16'), 'amar-shingare': byId('19'),
  'darshit-savaliya': byId('20'), 'divyesh-gajjar': byId('21'), 'kunj-rakholiya': byId('24'), 'harshil-changani': byId('23'),
  'ronak-dobariya': byId('25'),
};

const faces = JSON.parse(execFileSync('swift', ['scripts/faces.swift', ...Object.values(people)], { encoding: 'utf8', maxBuffer: 1e7 }));
mkdirSync('public/team', { recursive: true });

for (const [slug, src] of Object.entries(people)) {
  const f = faces[src];
  if (!f) { console.log('no face found:', slug); continue; }
  const side = Math.round(f.h / FACE_RATIO);
  const cx = f.x + f.w / 2, cy = f.y + f.h / 2;
  let left = Math.round(cx - side / 2), top = Math.round(cy - side * EYE_LINE);
  // Pad with white wherever the crop runs past the photo edge.
  const padL = Math.max(0, -left), padT = Math.max(0, -top);
  const padR = Math.max(0, left + side - f.W), padB = Math.max(0, top + side - f.H);
  const padded = await sharp(src).flatten({ background: '#fff' })
    .extend({ top: padT, left: padL, right: padR, bottom: padB, background: '#fff' }).toBuffer();
  await sharp(padded).extract({ left: left + padL, top: top + padT, width: side, height: side })
    .resize(320, 320).webp({ quality: 84 }).toFile(`public/team/${slug}.webp`);
  console.log(slug, 'ok');
}
