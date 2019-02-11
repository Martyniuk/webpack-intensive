// Core
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
                    // TODO: прокачать загрузку стилей
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
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
