/** @type {import('next').NextConfig} */
const nextConfig = {
  sentry: {
    hideSourceMaps: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production', // hide source maps in production
  },
  reactStrictMode: true,
  transpilePackages: ['ui'],
  experimental: {
    // appDir: true,
  },
  images: {
    // domains: [
    //   'firebasestorage.googleapis.com',
    //   'lh3.googleusercontent.com',
    //   'localhost',
    //   'storage.cloud.google.com',
    // ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.cloud.google.com',
      },
    ],
  },
};

module.exports = nextConfig;
