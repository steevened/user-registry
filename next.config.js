/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api'
        : 'https://api.themoviedb.org/3/',
  },
};

module.exports = nextConfig;
