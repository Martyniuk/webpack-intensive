// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('postcss-preset-env');

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
                    use:  [
                        'style-loader',
                        {
                            loader:  'css-loader',
                            options: {
                                modules:        true,
                                localIdentName:
                                    '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                        {
                            loader:  'postcss-loader',
                            options: {
                                plugins: [
                                    // postcss-font-magician
                                    // первый плагин
                                    // второй плагин
                                    env({
                                        stage: 0,
                                    }),
                                    // последний плагин
                                ],
                            },
                        },
                    ],
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
