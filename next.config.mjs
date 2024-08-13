/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/imageProxy/:path*",
        destination: "https://image-comic.pstatic.net/webtoon/:path*",
      },
    ];
  },
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
