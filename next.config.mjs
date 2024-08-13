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
        source: "/api/:path",
        destination: "https://navkatoons.vercel.app:path*",
      },
      {
        source: "/api/:path/*",
        destination: "https://navkatoons.vercel.app/:path*/",
      },
    ];
  },
};

export default nextConfig;
