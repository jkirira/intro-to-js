const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");

module.exports= {
    entry: {
        index: path.resolve(__dirname, "source", "js", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    devServer: {
        static: './source',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "source", "index.html"),
            title: "Webpack"
        }),
    ],
    module:{
        rules:[
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ]
    },

    watch: true,

    
    mode: 'development',
}