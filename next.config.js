/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@react-email/render"], // ✅ moved out of 'experimental'

  // Uncomment this section if needed for remote image support
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.jsdelivr.net',
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
