// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env.mode,
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
