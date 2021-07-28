const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log(path.resolve(__dirname, '../src'))

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, '../src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader',
      },
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
    })
]
}