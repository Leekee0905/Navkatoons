/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
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
      {
        protocol: "https",
        hostname: "https://page-images.kakaoentcdn.com",
        port: "",
        pathname: "/download/**",
      },
      {
        protocol: "https",
        hostname: "https://kr-a.kakaopagecdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://navkatoons.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp"],
  },
};

export default nextConfig;
