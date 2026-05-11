/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
    unoptimized: true,
  },
  // Required for Netlify static export
  trailingSlash: true,
}

module.exports = nextConfig
