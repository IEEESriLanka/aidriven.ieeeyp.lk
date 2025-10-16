const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  assetPrefix: isProd ? '/aidriven.ieeeyp.lk/' : '',
  basePath: isProd ? '/aidriven.ieeeyp.lk' : '',
  output: "export",
};

export default nextConfig;
