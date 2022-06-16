const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const PORT = process.env.PORT || "2000";
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:9000";
const CRYPT_SALT = process.env.CRYPT_SALT || "CRYPT_SALT";
const SECRET_KEY = process.env.SECRET_KEY || "SECRET_KEY";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "JWT_SECRET_KEY";
const CRYPT_SECRET_KEY = process.env.CRYPT_SECRET_KEY || "CRYPT_SECRET_KEY";

const config = {
  entry: path.resolve(__dirname, "../src/main.ts"),
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
    publicPath: "/"
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true } //  ビルドの高速化
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "~src": path.resolve(__dirname, "../src")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        PORT: JSON.stringify(PORT),
        MONGO_URI: JSON.stringify(MONGO_URI),
        CRYPT_SALT: JSON.stringify(CRYPT_SALT),
        JWT_SECRET_KEY: JSON.stringify(JWT_SECRET_KEY),
        SECRET_KEY: JSON.stringify(SECRET_KEY),
        CRYPT_SECRET_KEY: JSON.stringify(CRYPT_SECRET_KEY)
      }
    })
  ]
};

module.exports = config;
