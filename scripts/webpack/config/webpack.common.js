// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Instruments
const { BUILD } = require('../constants');

module.exports = () => {
    return {
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
        devtool: false,
        module:  {
            rules: [
                {
                    test: /\.js$/,
                    use:  {
                        loader:  'babel-loader',
                        options: {
                            compact: false,
                        },
                    },
                },
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
        ],
    };
};
