// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

const delay = (timeout = 1000) =>
    new Promise(resolve => setTimeout(resolve, timeout));

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return {
        mode: 'none',
        devtool: false,
        plugins: [
            // Каждый плагин — это конструктор
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'Изучаем вебпак! 🚀',
                favicon: './static/favicon.ico',
            }),
        ],
    };
};
