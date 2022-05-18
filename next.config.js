/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  images: {
    domains: ["cdn.tgdd.vn", "api.sashimeomeo.com", "martech.org"],
  },
  env: {
    API_URL: "https://api.sashimeomeo.com",
    // API_URL: "http://localhost:5000",
  },
};
