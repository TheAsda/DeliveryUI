const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./resources/index.html"
    })
  ],
  devServer: {
    host: "0.0.0.0"
  }
};
