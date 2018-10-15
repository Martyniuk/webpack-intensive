// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        mode: 'development',
        devtool: 'false',
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Learn Webpack very well',
                template: './static/template.html',
                favicon: './static/favicon.ico',
            }),
        ],
    };
};
