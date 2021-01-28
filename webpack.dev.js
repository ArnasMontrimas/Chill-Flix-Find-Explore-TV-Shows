const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            esModule: true,
                            modules: {
                                compileType: "module",
                                mode: "local",
                                auto: true,
                                exportLocalsConvention: "camelCaseOnly",
                                localIdentName: "[local]-[hash:base64:5]",
                            },
                        },
                    },
                ],
            },
        ],
    },
    target: "web",
    devServer: {
        contentBase: "./public",
        open: true,
        liveReload: false,
        hot: true,
    },
});
