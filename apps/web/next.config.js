/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  transpilePackages: ['@monorepo/gym-shared'],
  experimental: {
    appDir: true,
    serverActions: true,
  },
};
