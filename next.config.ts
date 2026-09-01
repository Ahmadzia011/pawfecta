import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-fd2fd92e94ea41dc8f1d922b3ba999ce.r2.dev",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
