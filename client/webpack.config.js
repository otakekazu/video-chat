const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        port: '3000',
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html'
        })
    ],
}