import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  serverExternalPackages: ["better-sqlite3"],
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ["192.168.31.96"],
};

export default nextConfig;
