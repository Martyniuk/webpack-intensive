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

export const loadImages = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: './images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});
