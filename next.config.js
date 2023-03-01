/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ hostname: "i.imgur.com" }],
  },
};

module.exports = nextConfig;

