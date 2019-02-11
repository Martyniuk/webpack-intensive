// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('postcss-preset-env');

// Constants
const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require('../constants');

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return {
        entry:  [ SOURCE_DIRECTORY ],
        output: {
            path:     BUILD_DIRECTORY,
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use:  {
                        loader: 'babel-loader',
                    },
                },
                {
                    // TODO: прокачать загрузку стилей
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
                                    // цепочка плагинов postcss
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            // Каждый плагин — это конструктор
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Изучаем вебпак! 🚀',
                favicon:  './static/favicon.ico',
            }),
        ],
    };
};
