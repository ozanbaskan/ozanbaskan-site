const { default: merge } = require("webpack-merge");
const config = require("./webpack.common");
const path = require("path");
const devPath = path.join(__dirname, "dev");

module.exports = merge(config, {
    mode: "development",
    devServer: {
        port: 3031,
        historyApiFallback: true
    }
})
