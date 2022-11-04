/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SECRET_KEY: 'ocdb-secret',
    SECRET_TOKEN: "U2FsdGVkX1+hlp/D/AcMaJPkgf2dUcKmgWmrdjrsczO5h313iaCjYoY9euHPoVa0",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
