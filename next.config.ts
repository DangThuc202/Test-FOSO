/** @type {import('next').NextConfig} */
const nextConfig = {
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
