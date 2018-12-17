// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// object
// function
// Promise

module.exports = (env) => {
    console.log('→ env', env);

    return {
        mode: 'none',
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'Learn webpack'
            })
        ]
    };
};
