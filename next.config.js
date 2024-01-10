/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "57c3kqeaat.ap-northeast-1.awsapprunner.com",
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
