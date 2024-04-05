/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yapa5scinj.ap-northeast-1.awsapprunner.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.namu.wiki",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.christiantoday.co.kr",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
