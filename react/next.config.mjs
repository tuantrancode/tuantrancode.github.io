import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // <-- Important for GitHub Pages
  distDir: 'out',   // Where to put the built static files
  // swcMinify: true, // Next.js 14+ always minifies JS in production
};

export default withBundleAnalyzer(nextConfig);
