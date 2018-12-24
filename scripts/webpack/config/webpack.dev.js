// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

// Config
const getCommonConfig = require('./webpack.common');

// Constants
const { PROJECT_ROOT } = require('../constants');

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
