import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'flagcdn.com', 'upload.wikimedia.org'], // Add the hostname here
  },
};

export default nextConfig;
