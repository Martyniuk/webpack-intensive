// Core
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Constants
const {
    PROJECT_ROOT,
    SOURCE_DIRECTORY,
    BUILD_DIRECTORY,
} = require('../constants');

// the clean options to use
const cleanOptions = {
    verbose: true,
    root:    PROJECT_ROOT,
};

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        module:  {
            rules: [
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
        plugins: [ new CleanWebpackPlugin([ BUILD_DIRECTORY ], cleanOptions) ],
    };
};
