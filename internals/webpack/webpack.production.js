const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  context: process.cwd(),
  entry: './src/index.tsx',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|png|jpg|ttf|otf|woff|woff2)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        core: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'core',
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
        mantine: {
          test: /[\\/]node_modules[\\/]@mantine[\\/]/,
          name: 'mantine',
          chunks: 'all',
          priority: 15,
          enforce: true,
        },
        redux: {
          test: /[\\/]node_modules[\\/](redux|redux-saga|redux-persist|reselect|react-redux|@reduxjs)/,
          name: 'redux',
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
        i18n: {
          test: /[\\/]node_modules[\\/](i18next|react-i18next|react-intl|i18next-browser-languagedetector)/,
          name: 'i18n',
          chunks: 'all',
          priority: 5,
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
        // reactDom: {
        //   reuseExistingChunk: false,
        //   enforce: true,
        //   test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
        //   name: 'npm.react-dom',
        // },
        // react: {
        //   reuseExistingChunk: false,
        //   enforce: true,
        //   test: /[\\/]node_modules[\\/](react)[\\/]/,
        //   name: 'npm.react',
        // },
        // multipleChunks: {
        //   test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        //   name: 'multipleChunks',
        //   chunks: 'all',
        //   priority: 10,
        //   enforce: true, // Ensures it always creates this chunk
        // },
        // 'my-ui': {
        //   reuseExistingChunk: false,
        //   enforce: true,
        //   test: /[\\/]packages[\\/]ui[\\/]/,
        //   name: 'my-ui',
        // },
        // vendor: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name(module) {
        //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
        //     return `npm.${packageName.replace('@', '')}`;
        //   },
        // },
      },
    },
  },
};
