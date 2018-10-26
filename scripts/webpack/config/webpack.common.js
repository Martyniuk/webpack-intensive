// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Instruments
const { SOURCE, BUILD, PROJECT_ROOT } = require('../constants');

module.exports = () => {
    return {
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
                root: PROJECT_ROOT,
            }),
        ],
    };
};
