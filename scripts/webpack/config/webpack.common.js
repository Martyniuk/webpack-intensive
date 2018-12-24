// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constants
const { SOURCE, BUILD } = require('../constants');

module.exports = () => {
    return {
        entry:  [ SOURCE ],
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use:  'babel-loader',
                },
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title:    'Learn webpack',
                template: './static/template.html',
                favicon:  './static/favicon.ico',
            }),
        ],
    };
};
