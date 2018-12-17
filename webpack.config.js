// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// object
// function
// Promise

module.exports = () => {
    return {
        mode: 'none',
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'Learn webpack',
            }),
        ],
    };
};
