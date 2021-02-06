const path = require("path");

module.exports = {
  entry: "./src/Dashboard/index.js",
  output: {
    path: path.join(__dirname, "/ibd_dashboard/static/js"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};