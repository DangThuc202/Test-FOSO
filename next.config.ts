// import type { NextConfig } from "next";
// /** @type {import('next').NextConfig} */

// const nextConfig: NextConfig = {
//   i18n: {
//     locales: ["en", "vi"],
//     defaultLocale: "vi",
//   },

// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
  },

  images: {
    unoptimized: true, // Không tối ưu hóa ảnh (cho phép dùng <img> mà không cảnh báo)
  },
  webpack: (config: {
    module: { rules: { test: RegExp; type: string }[] };
  }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
