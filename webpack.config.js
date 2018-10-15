// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'false',
    plugins: [
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            appMountId: 'app',
            title: 'Learn Webpack very well',
            mobile: true,
        }),
    ],
};
