// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { resolve } = require('path');

// object
// function
// Promise

module.exports = () => {
    return {
        entry: resolve(__dirname, '../../source'),
        output: {
            path: resolve(__dirname, '../../build'),
            filename: 'bundle.js',
        },
        mode: 'none',
        devtool: false,
        plugins: [
            new CleanWebpackPlugin(['build', 'dist'], {
                root: resolve(__dirname, '../../'),
            }),
            new HtmlWebpackPlugin({
                title: 'Learn webpack',
                template: './static/template.html',
                favicon: './static/favicon.ico',
            }),
        ],
    };
};
