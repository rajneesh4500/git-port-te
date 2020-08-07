const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/app.js",
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Git Test",
      template: "src/index.html",
    }),
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "src/bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpg)$/i,
        loader: "file-loader",
      },
      {
        loader: "babel-loader",
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: /src/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 9000,
  },
};
