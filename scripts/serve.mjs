// Previews the static export in /out exactly as a web host would serve it.
// Usage: npm run build && npm start   →  http://localhost:3000
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { gzipSync } from 'node:zlib';

const root = join(process.cwd(), 'out');
const port = Number(process.env.PORT) || 3000;
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
  '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.pdf': 'application/pdf',
};

async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  for (const p of [clean, `${clean}.html`, join(clean, 'index.html')]) {
    const file = join(root, p);
    if (!file.startsWith(root)) return null;
    try {
      if ((await stat(file)).isFile()) return file;
    } catch {}
  }
  return null;
}

try {
  await stat(join(root, 'index.html'));
} catch {
  console.error('No build found. Run "npm run build" first.');
  process.exit(1);
}

createServer(async (req, res) => {
  const file = await resolve(req.url);
  const target = file || join(root, '404.html');
  const type = types[extname(target)] || 'application/octet-stream';
  let body = await readFile(target);
  const headers = { 'Content-Type': type };
  // Gzip text like any real web host does.
  if (/text|javascript|json|xml|svg/.test(type) && /gzip/.test(req.headers['accept-encoding'] || '')) {
    body = gzipSync(body);
    headers['Content-Encoding'] = 'gzip';
  }
  res.writeHead(file ? 200 : 404, headers);
  res.end(body);
}).listen(port, () => console.log(`DataCare site ready → http://localhost:${port}`));
