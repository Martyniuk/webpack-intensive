// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Instruments
const { SOURCE, BUILD, PROJECT_ROOT } = require('../constants');

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
