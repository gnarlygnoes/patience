import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import * as path from "path";

const devServer: DevServerConfiguration = {

};

const config: Configuration = {
  mode: "development",
  devServer,
  entry: './src/index.ts',
  output: {
    filename: './public/output/index.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};

// module.exports
export default config;