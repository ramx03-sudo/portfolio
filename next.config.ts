import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - Next.js internal property suggested by error message
  allowedDevOrigins: ['192.168.1.5', 'localhost'],
};

export default nextConfig;
