// Core
import merge from 'webpack-merge';
import env from 'postcss-preset-env';

// Constants
import { SOURCE, BUILD } from '../constants';

// Webpack Modules
import * as modules from '../modules';

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
                                    sourceMap:      true,
                                    modules:        true,
                                    localIdentName:
                                        '[path][name]__[local]--[hash:base64:5]',
                                },
                            },
                            {
                                loader:  'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    plugins:   [
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
                            // sass-loader
                            // sourceMap: true,
                        ],
                    },
                ],
            },
        },
        modules.setupHtml(),
        modules.loadJavaScript(),
        modules.loadImages(),
        modules.loadSvg(),
    );
};
