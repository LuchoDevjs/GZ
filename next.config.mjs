/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
      },
    ],
  },
};

export default nextConfig;
