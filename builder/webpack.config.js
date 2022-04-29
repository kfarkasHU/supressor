const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const configFn = (env, args) => {
  const filePostfix = env.development
    ? ""
    : ".min"
  return {
    entry: "./src/main.ts",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        })
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: `builder${filePostfix}.js`,
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      client: {
        overlay: true
      },
      port: 9000,
      static: "./dist",
      historyApiFallback: {
        index: 'index.html'
      }
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  };
}

module.exports = configFn;
