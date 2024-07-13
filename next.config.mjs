// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "openweathermap.org",
//       },
//     ],
//   },
// };
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const config = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "openweathermap.org",
        pathname: "/img/w/**",
      },
    ],
  },
};

export default config;
