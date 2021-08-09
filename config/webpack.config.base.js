const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader',
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'stylus-loader' }
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|bmp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            fallback: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
          }
        }
      },
      {
        test: /\.(mp4|ogg|mp3|wav)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            fallback: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
          }
        }
      }
    ],
  },
  resolve: {
    //使用的拓展名
    extensions: [".js", ".json", ".jsx", ".css"],
    //使用的别名
    alias: {
      "@api": path.resolve(__dirname,'src/api'),
      "@components": path.resolve(__dirname,'src/components'),
      "@utils": path.resolve(__dirname,'src/utils'),
      "@config": path.resolve(__dirname,'src/config'),
      "@pages": path.resolve(__dirname,'src/pages'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }), 
  ]
}