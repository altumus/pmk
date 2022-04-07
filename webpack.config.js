const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devServer:{
        port: 3200,
    },

    plugins: [
        new HTMLWebpackPlugin({template: './src/html/index.html'}),
        new CleanWebpackPlugin(),

        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            }
        ]
    }
}