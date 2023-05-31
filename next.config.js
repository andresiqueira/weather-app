/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
