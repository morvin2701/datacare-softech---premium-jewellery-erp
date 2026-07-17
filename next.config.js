/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow opening the dev site from LAN IP without breaking /_next assets.
  allowedDevOrigins: ['192.168.1.13', 'localhost', '127.0.0.1'],
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/.git/**',
          '**/.next/**',
          '**/node_modules/**',
          '**/legacy_vite/**',
          '**/datacareold/**',
          '**/assets/**',
          '**/new images/**',
        ],
      };
    }

    return config;
  },
  images: {
    // Skip sharp optimisation in dev — much faster on local/synced folders.
    unoptimized: process.env.NODE_ENV === 'development',
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
