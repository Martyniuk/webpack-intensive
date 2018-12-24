// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

// Config
const getCommonConfig = require('./webpack.common');

// Constants
const { PROJECT_ROOT } = require('../constants');

module.exports = () => {
    return merge(getCommonConfig(), {
        mode:    'none', // production
        devtool: false,
        plugins: [
            new CleanWebpackPlugin([ 'build' ], {
                root: PROJECT_ROOT,
            }),
        ],
    });
};
