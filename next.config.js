/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "links.papareact.com", "cdn.sanity.io"],
  },
};
