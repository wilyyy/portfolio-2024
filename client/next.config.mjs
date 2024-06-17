/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   sassOptions: {
      additionalData: `@import "@/styles/index.scss";`,
   },
};

export default nextConfig;
