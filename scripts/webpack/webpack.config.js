// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

// object
// function
// Promise

module.exports = () => {
    return {
        entry: resolve(__dirname, '../../source'),
        output: {
            path: resolve(__dirname, '../../build'),
        },
        mode: 'none',
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Learn webpack',
                template: './static/template.html',
                favicon: './static/favicon.ico',
            }),
        ],
    };
};
