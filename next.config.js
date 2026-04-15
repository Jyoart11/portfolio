/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 THIS is the important fix

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;