/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
    },
  },
  images: {
    remotePatterns: [{ hostname: "i.imgur.com" }],
  },
};

module.exports = nextConfig;
