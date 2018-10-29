// Core
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

// Instruments
const { SOURCE, PROJECT_ROOT } = require('../constants');
const getCommonConfig = require('./webpack.common').default;

module.exports = () => {
    return merge(getCommonConfig(), {
        mode:    'development', // временно
        entry:   SOURCE,
        plugins: [
            new CleanWebpackPlugin([ 'build' ], {
                root: PROJECT_ROOT,
            }),
        ],
    });
};
