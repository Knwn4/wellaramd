import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Meta pixel reads the referrer. strict-origin strips the path from it, so
  // a referrer can never carry a product/condition path to the ad platform.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Referrer-Policy", value: "strict-origin" }],
      },
    ];
  },
};

export default nextConfig;
