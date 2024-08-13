/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  rewrites: [
    {
      source: "/api/:path*",
      destination: "https://navkatoons.vercel.app:path*",
    },
    {
      source: "/api/:path*/",
      destination: "https://navkatoons.vercel.app/:path*/",
    },
  ],
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
};

export default nextConfig;
