// Core
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import env from 'postcss-preset-env';

// Constants
import { SOURCE, BUILD } from '../constants';

// Webpack Modules
import { loadJavaScript } from '../modules';

export default () => {
    return merge(
        {
            entry:  [ SOURCE ],
            output: {
                path:     BUILD,
                filename: 'bundle.js',
            },
            module: {
                rules: [
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
            plugins: [ // setupHtml
                new HtmlWebpackPlugin({
                    title:    'Learn webpack',
                    template: './static/template.html',
                    favicon:  './static/favicon.ico',
                }),
            ],
        },
        loadJavaScript(),
    );
};
