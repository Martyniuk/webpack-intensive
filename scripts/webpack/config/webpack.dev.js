// Core
const { HotModuleReplacementPlugin } = require('webpack');

// Instruments
const { SOURCE } = require('../constants');

module.exports = () => {
    return {
        mode:    'development',
        entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true', SOURCE ],
        plugins: [ new HotModuleReplacementPlugin() ],
    };
};
