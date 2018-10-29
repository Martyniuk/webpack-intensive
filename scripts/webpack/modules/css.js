// Core
import env from 'postcss-preset-env';
import fontMagician from 'postcss-font-magician';

export const loadCss = () => {
    return {
        module: {
            rules: [
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
                                    fontMagician({
                                        protocol: 'https:',
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
    };
};
