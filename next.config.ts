/** @type {import('next').NextConfig} */
// const repoName = "/aidriven.ieeeyp.lk";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure static assets resolve correctly when hosted at /<repo-name>/ on GitHub Pages.
  // basePath: process.env.DEPLOY_ENV === 'GH_PAGES' ? repoName : '',
  // assetPrefix: process.env.DEPLOY_ENV === 'GH_PAGES' ? `${repoName}/` : '',
  // trailingSlash: true,
  output: "export",
  distDir: "dist"
};

export default nextConfig;
