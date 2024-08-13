/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-comic.pstatic.net",
        port: "",
        pathname: "/webtoon/**",
      },
    ],
    formats: ["image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "https://navkatoons.vercel.app",
      },
    ];
  },
};

export default nextConfig;
