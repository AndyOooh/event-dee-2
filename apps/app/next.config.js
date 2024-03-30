/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  experimental: {
    // appDir: true,
  },
  experimental: {
    optimizePackageImports: [
      'react-icons/*',
      '@hookform/resolvers',
      '@reach/combobox',
      '@react-google-maps/api',
      'date-fns',
      'firebase',
      'lodash',
      'react-firebase-hooks',
      'react-hook-form',
      'react-spinners',
      'recoil',
      'server-only',
      'ui',
      'use-places-autocomplete',
      'usehooks-ts',
      'yup',
    ],
  },
  images: {
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
