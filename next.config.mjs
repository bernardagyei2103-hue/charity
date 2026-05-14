/** @type {import('next').NextConfig} */
const productionOnlyExport =
  process.env.NODE_ENV === "production"
    ? {
        output: "export",
      }
    : {};

const nextConfig = {
  ...productionOnlyExport,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Keep shared layout chunks warmed longer — reduces flaky ChunkLoadError in dev.
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules"],
      };
    }
    return config;
  },
};

export default nextConfig;
