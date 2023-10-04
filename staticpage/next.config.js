/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Home",
        statusCode: 301,
      },
    ];
  },
  
};

module.exports = nextConfig;
