/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "*"
      },
      {
        protocol: "http",
        hostname: '*'
      }
    ]
  }
};

export default nextConfig;
