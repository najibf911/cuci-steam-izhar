import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.tokopedia.net",
      },
      {
        protocol: "https",
        hostname: "static.promediateknologi.id",
      },
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "harianbanyuasin.bacakoran.co",
      },
      {
        protocol: "https",
        hostname: "mmc.tirto.id",
      },
      {
        protocol: "https",
        hostname: "moladin.com",
      },
    ],
  },
};

export default nextConfig;
