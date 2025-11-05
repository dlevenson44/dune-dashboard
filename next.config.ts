import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // enforce RSM to improve error detection during dev
  reactStrictMode: true,
};

export default nextConfig;
