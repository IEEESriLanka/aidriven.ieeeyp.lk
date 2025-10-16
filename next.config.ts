/** @type {import('next').NextConfig} */
const repoName = "aidriven.ieeeyp.lk";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure static assets resolve correctly when hosted at /<repo-name>/ on GitHub Pages.
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  basePath: isProd ? `/${repoName}` : undefined,
  output: "export",
};

export default nextConfig;
