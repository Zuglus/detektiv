/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig;
