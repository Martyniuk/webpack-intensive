// Core
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

// Config
const getCommonConfig = require('./webpack.common');

export default () => {
    return merge(getCommonConfig(), {
        entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        mode:    'development',
        devtool: false, // TODO: настроить source map
        plugins: [ new HotModuleReplacementPlugin() ],
    });
};
