const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CreateMenusPlugin = require('../lib/CreateMenusPlugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'production',
  entry: {
    main: './src/main.js',
    router: './src/router.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
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
    new HtmlWebpackPlugin({
      title: 'app',
      template: './public/index.html'
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 3,
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        },
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: 50,
          reuseExistingChunk: false
        }
      }
    }
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 30000000,
    maxEntrypointSize: 50000000
  }
};
