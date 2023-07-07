/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api'
        : 'https://users-registry.up.railway.app/api',
  },
};

module.exports = nextConfig;
