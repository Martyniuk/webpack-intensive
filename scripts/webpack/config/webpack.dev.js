// Core
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

// Constants
const { PROJECT_ROOT } = require('../constants');

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
