// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Instruments
import { STATIC, CHUNK_NAME_ASSET } from '../constants';

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
                            name: `images/${CHUNK_NAME_ASSET}`,
                            // output: ↑
                        },
                    },
                ],
            },
        ],
    },
});

export const loadSvg = () => ({
    module: {
        rules: [
            {
                test:   /\.svg$/,
                issuer: {
                    // тот, кто заимпортил .svg
                    test: /\.js$/,
                },
                use: [
                    '@svgr/webpack',
                    {
                        loader:  'file-loader',
                        options: {
                            name: `images/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
            {
                test:   /\.svg$/,
                issuer: {
                    // тот, кто заимпортил .svg
                    test: /\.css$/,
                },
                use: [
                    {
                        loader:  'file-loader',
                        options: {
                            name: `images/${CHUNK_NAME_ASSET}`,
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
                            name: `fonts/${CHUNK_NAME_ASSET}`,
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
