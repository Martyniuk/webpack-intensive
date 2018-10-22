// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { resolve } = require('path');

module.exports = () => {
    return {
        mode:   'development',
        entry:  resolve(__dirname, '../source'),
        output: {
            path:     resolve(__dirname, '../build'),
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
        ],
    };
};
