/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  experimental: {
    // appDir: true,
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'localhost',
      'storage.cloud.google.com',
    ],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.example.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
