import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use a different dist directory to avoid dev lock conflicts
  distDir: ".next2",
};

export default nextConfig;
