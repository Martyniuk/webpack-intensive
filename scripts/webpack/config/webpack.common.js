// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Constants
const { SOURCE, BUILD, PROJECT_ROOT } = require('../constants');

module.exports = () => {
    return {
        entry: [ SOURCE ],
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
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
        plugins: [
            new CleanWebpackPlugin([ 'build' ], {
                root: PROJECT_ROOT,
            }),
            new HtmlWebpackPlugin({
                title:    'Learn webpack',
                template: './static/template.html',
                favicon:  './static/favicon.ico',
            }),
            new HotModuleReplacementPlugin(),
        ],
    };
};
