// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
import env from 'postcss-preset-env';
import merge from 'webpack-merge';

// Instruments
import { BUILD } from '../constants';

export default () => {
    return merge({
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
        devtool: false,
        module:  {
            rules: [
                {
                    test: /\.js$/,
                    use:  {
                        loader:  'babel-loader',
                        options: {
                            compact: false,
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use:  [
                        'style-loader',
                        {
                            loader:  'css-loader',
                            options: {
                                importLoaders:  1,
                                modules:        true,
                                localIdentName:
                                    '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                        {
                            loader:  'postcss-loader',
                            options: {
                                plugins: [
                                    env({
                                        // plugin 1
                                        stage: 0,
                                    }),
                                    // plugin 2
                                    // plugin 3
                                    // plugin n
                                    // last plugin cssnano → minify
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title:    'Learn Webpack very well',
                template: './static/template.html',
                favicon:  './static/favicon.ico',
            }),
        ],
    });
};
