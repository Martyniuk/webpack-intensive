// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
import env from 'postcss-preset-env';

// Constants
import { SOURCE, BUILD } from '../constants';

export default () => {
    return {
        entry:  [ SOURCE ],
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use:  {
                        loader:  'babel-loader',
                        // options: {
                        //     compact: true,
                        // },
                    },
                },
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
        plugins: [
            new HtmlWebpackPlugin({
                title:    'Learn webpack',
                template: './static/template.html',
                favicon:  './static/favicon.ico',
            }),
        ],
    };
};
