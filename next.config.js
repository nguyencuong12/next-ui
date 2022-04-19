/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    // ssr: true,
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  images: {
    domains: ["cdn.tgdd.vn"],
  },
};
