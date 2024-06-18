const serverUrl = process.env.NEXT_PUBLIC_DEV_SERVER;

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
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${serverUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
