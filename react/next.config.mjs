import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // Next.js 14+ always minifies JS in production

  /* For Deploying to GitHub Pages as a static site (SSG)*/
  output: 'export', // generate a static site (SSG) from the Next.js project <-- Important for GitHub Pages
  distDir: 'out',   // Where to put the built static files
  /* IMPORTANT: add file named .nojekyll to public/ folder */
  images: {
    unoptimized: true, // Next.js Images component will not load in Github pages
  },
};

export default withBundleAnalyzer(nextConfig);
