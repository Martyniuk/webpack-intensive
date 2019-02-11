// Core
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Constants
const { PROJECT_ROOT, BUILD_DIRECTORY } = require('../constants');

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
        plugins: [ new CleanWebpackPlugin([ BUILD_DIRECTORY ], cleanOptions) ],
    };
};
