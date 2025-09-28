/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: 'http',
        port: '3333',
        hostname: 'localhost',
        pathname: "/uploads/**"

      
      },
      // Deploy app
      {
        protocol: "https",
        hostname: "api.website.com",
        pathname: "/uploads/**",
      },
    ]
  }
};

module.exports = nextConfig;
