const { default: merge } = require("webpack-merge");
const config = require("./webpack.common");
const path = require("path");
const buildPath = path.join(__dirname, "docs");


module.exports = merge(config, {
    mode: "production",
    output: {
        path: buildPath
    }
});