// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const setupHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            title:    'Learn webpack',
            template: './static/template.html',
            favicon:  './static/favicon.ico',
        }),
    ],
});
