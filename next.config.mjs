/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't fail production builds on lint nitpicks. Run `npm run lint` to see them.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
