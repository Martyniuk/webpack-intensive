// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

// Config
const getCommonConfig = require('./webpack.common');

module.exports = () => {
    return merge(getCommonConfig(), {
        entry: [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        mode:  'development',

        devtool: false, // TODO: настроить source map
        plugins: [
            new HtmlWebpackPlugin({
                title:    'Learn webpack',
                template: './static/template.html',
                favicon:  './static/favicon.ico',
            }),
            new HotModuleReplacementPlugin(),
        ],
    });
};
