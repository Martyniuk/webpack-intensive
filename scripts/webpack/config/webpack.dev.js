// Core
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

// Constants
const { PROJECT_ROOT, BUILD_DIRECTORY } = require('../constants');

// the clean options to use
const cleanOptions = {
    verbose: true,
    root:    PROJECT_ROOT,
};

// Configurations
const getCommonConfig = require('./webpack.common');

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return merge(getCommonConfig(), {
        mode:    'none',
        devtool: false, // TODO: настроить source maps
        entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        module:  {
            rules: [
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
        plugins: [
            // Каждый плагин — это конструктор
            new HotModuleReplacementPlugin(),
        ],
    });
};
