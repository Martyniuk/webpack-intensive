// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import env from 'postcss-preset-env';
import fontMagician from 'postcss-font-magician';

export const loadCss = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use:  [
                        'style-loader', // ←
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

// loadDevCss
export const loadProdCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    MiniCssExtractPlugin.loader, // mini-css-loader
                    loadCss({ sourceMap: false }), // css-loader
                    loadPostCss({ sourceMap: false, minimize: true }), // postcss-loader
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      'css/style.css',
            chunkFilename: 'css/style.css',
        }),
    ],
});
