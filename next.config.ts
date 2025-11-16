/** @type {import('next').NextConfig} */
const repoName = "/aidriven.ieeeyp.lk";


const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure static assets resolve correctly when hosted at /<repo-name>/ on GitHub Pages.
  basePath: repoName,
  assetPrefix: repoName,
  trailingSlash: true,
  output: "export",
  distDir: "dist",
};
export default nextConfig;
