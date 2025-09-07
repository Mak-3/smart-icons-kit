// Webpack configuration to fix source map and React version issues
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          // Exclude ALL node_modules from source map loading
          /node_modules/,
        ],
      },
    ],
  },
  resolve: {
    alias: {
      // Force all React imports to use the same instance
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime'),
      'react/jsx-dev-runtime': path.resolve(__dirname, 'node_modules/react/jsx-dev-runtime'),
    },
    // Ensure we resolve to the project's node_modules first
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ],
  },
  // Additional configuration to prevent React version conflicts
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
