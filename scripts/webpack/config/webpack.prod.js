// Core
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Instruments
const { SOURCE, PROJECT_ROOT } = require('../constants');

module.exports = () => {
    return {
        entry:   SOURCE,
        plugins: [
            new CleanWebpackPlugin([ 'build' ], {
                root: PROJECT_ROOT,
            }),
        ],
    };
};
