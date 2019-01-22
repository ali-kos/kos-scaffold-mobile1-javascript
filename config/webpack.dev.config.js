const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CreateMenusPlugin = require('../lib/CreateMenusPlugin');
const NativeDebugPlugin = require('../lib/plugin-native-debug');

process.env.NODE_ENV = 'development';

module.exports = {
  context: path.resolve(__dirname, '../'),
  devtool: 'source-map',
  mode: 'development',
  entry: './src/main.js',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-import'),
                require('postcss-url'),
                require('autoprefixer')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new CreateMenusPlugin({
      path: './src/pages'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'app',
      template: './public/index.html'
    }),
    new NativeDebugPlugin({options: true})
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: '0.0.0.0',
    port: 8099,
    headers: {
      'Cache-Control': 'no-cache, no-store'
    },
    open: true,
    hot: true,
    proxy: {
      '/scm-mobile/*': {
        target: 'http://10.10.1.133:9090', // 孙帅ip
        // changeOrigin: true,
        secure: false,
      }
    },
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 30000000,
    maxEntrypointSize: 50000000
  }
};
