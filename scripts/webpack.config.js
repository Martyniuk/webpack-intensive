// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = () => {
    return {
        mode:    'development',
        entry:   resolve(__dirname, '../source'),
        devtool: 'false',
        plugins: [
            new HtmlWebpackPlugin({
                title:    'Learn Webpack very well',
                template: './static/template.html',
                favicon:  './static/favicon.ico',
            }),
        ],
    };
};
