// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    console.log('→ env', env);
    return {
        mode: env,
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
