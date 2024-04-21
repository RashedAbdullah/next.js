/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fcgp3-2.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
