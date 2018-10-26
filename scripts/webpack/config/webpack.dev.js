// Core
const { HotModuleReplacementPlugin } = require('webpack');

// Instruments
const { SOURCE, BUILD } = require('../constants');

module.exports = () => {
    return {
        mode:   'development',
        entry:  [ 'webpack-hot-middleware/client?reload=true&quiet=true', SOURCE ],
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
        devtool: 'false',
        module:  {
            rules: [
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
        plugins: [ new HotModuleReplacementPlugin() ],
    };
};
