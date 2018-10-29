// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Instruments
import { STATIC } from '../constants';

export const loadImages = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            // input: резовл webpack'a — инфа о файлах, о путях...
                            name: `./images/[name].[ext]`,
                            // input: резовл webpack'a
                        },
                    },
                ],
            },
        ],
    },
});

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test: /\.(woff2|eot)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: `./fonts/[name].[ext]`,
                        },
                    },
                ],
            },
        ],
    },
});

export const connectHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            title:    'Learn Webpack',
            template: `${STATIC}/template.html`,
            favicon:  `${STATIC}/favicon.ico`,
        }),
    ],
});
