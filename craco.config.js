module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Split chunks optimization
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          // Separate bundle for nerdamer
          nerdamer: {
            test: /[\\/]node_modules[\\/]nerdamer[\\/]/,
            name: 'nerdamer',
            chunks: 'async',
            priority: 1,
          },
        },
      };

      return webpackConfig;
    },
  },
}; 