// Core
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Instruments
const { SOURCE, BUILD, PROJECT_ROOT } = require('../constants');

module.exports = () => {
    return {
        entry:  SOURCE,
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
        devtool: false,
        module:  {
            rules: [
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin([ 'build' ], {
                root: PROJECT_ROOT,
            }),
        ],
    };
};
