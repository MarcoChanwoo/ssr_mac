process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

process.on("unhandledRejection", (err) => {
  throw err;
});

require("../config/env");
const fs = require("fs-extra");
const webpack = require("webpack");
const config = require("../config/webpack.config.server");
const paths = require("../config/paths");
// const resolve = require("resolve"); // resolve를 넣으니 생성됨. 주시 필요

function build() {
  console.log("Creating server build...");
  fs.emptyDirSync(paths.ssrBuild);
  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(stats.toString());
    });
  });
}

build();
