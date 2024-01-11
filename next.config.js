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
        hostname: "57c3kqeaat.ap-northeast-1.awsapprunner.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
