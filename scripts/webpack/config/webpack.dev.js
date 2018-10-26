// Core
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

// Instruments
const { SOURCE } = require('../constants');
const getCommonConfig = require('./webpack.common');

module.exports = () => merge(getCommonConfig(), {
    mode:    'development',
    entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true', SOURCE ],
    plugins: [ new HotModuleReplacementPlugin() ],
});
