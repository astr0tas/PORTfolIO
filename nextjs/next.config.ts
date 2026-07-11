import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

// Enable Webpack watch mode if USE_WEBPACK environment variable is set to true (for development in a devcontainer since HMR doesn't work well with devcontainers)
if (process.env.USE_WEBPACK === "true")
{
  nextConfig.webpack = (config, context) => {
    if (context.dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  };
}

export default nextConfig;
