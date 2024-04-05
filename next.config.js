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
        hostname: "mello-s3-dev.s3.ap-northeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
