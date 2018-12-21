// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// object
// function
// Promise

module.exports = () => {
    return {
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
