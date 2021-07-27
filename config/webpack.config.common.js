const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, 'src')],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [
          path.resolve(__dirname, 'src/api'),
          path.resolve(__dirname, 'src/utils')
        ],
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ],
  },
  resolve: {
    //使用的拓展名
    extensions: [".js", ".json", ".jsx", ".css"],
    //使用的别名
    alis: {
      "@api": path.resolve(__dirname,'src/api'),
      "@components": path.resolve(__dirname,'src/components'),
      "@utils": path.resolve(__dirname,'src/utils'),
      "@config": path.resolve(__dirname,'src/config'),
      "@pages": path.resolve(__dirname,'src/pages'),
    },
  }
}