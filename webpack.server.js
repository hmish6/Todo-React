const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "index.js"),

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, "server-build"),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "ignore-loader"
      }
    ]
  }
};
