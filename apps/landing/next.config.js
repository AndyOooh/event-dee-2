/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  experimental: {
    // appDir: true,
  },
};

module.exports = nextConfig;
