// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { resolve } = require('path');

// Constants
const { SOURCE, BUILD } = require('./constants');

module.exports = () => {
    return {
        entry:  [ 'webpack-hot-middleware/client?reload=true&quiet=true', SOURCE ],
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
                root: resolve(__dirname, '../../'),
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
