/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain-HTML site to /out that can be
  // uploaded to any web host (same as the current Vite site) — no Node server needed.
  output: 'export',
  // Every page exports as <route>/index.html so IIS serves clean URLs without a rewrite module.
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Images in /public/images are already resized WebP (npm run images).
    unoptimized: true,
  },
};

export default nextConfig;
