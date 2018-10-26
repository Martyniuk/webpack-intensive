// Core
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Instruments
const { SOURCE, BUILD } = require('./constants');

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
        plugins: [
            new HtmlWebpackPlugin({
                title:    'Learn Webpack very well',
                template: './static/template.html',
                favicon:  './static/favicon.ico',
            }),
            new CleanWebpackPlugin([ 'build' ], {
                root: resolve(__dirname, '../'),
            }),
            new HotModuleReplacementPlugin(),
        ],
    };
};
