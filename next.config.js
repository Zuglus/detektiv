import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    // Mobile-optimized device sizes
    deviceSizes: [320, 375, 414, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
    cpus: 1, // Optimize for mobile builds
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /node_modules/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      };

      // Mobile-optimized performance settings
      config.performance = {
        ...config.performance,
        hints: 'warning',
        maxEntrypointSize: 250000, // Smaller for mobile
        maxAssetSize: 250000,
      };

      // Tree shaking for mobile
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Separate React for better caching
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          react: {
            name: 'react',
            test: /node_modules\/(react|react-dom)\//,
            priority: 20,
            chunks: 'all',
            minSize: 20000,
            maxSize: 50000,
          },
          vendor: {
            test: /node_modules/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
            minSize: 15000,
            maxSize: 40000,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            minSize: 8000,
            maxSize: 20000,
          },
        },
      };
    }

    // Add bundle analyzer plugin for development
    if (dev && process.env.ANALYZE === 'true') {
      const BundleAnalyzerPlugin = bundleAnalyzer({
        enabled: process.env.ANALYZE === 'true',
      });
      config.plugins.push(BundleAnalyzerPlugin);
    }

    return config;
  },
};

export default nextConfig;

