// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import env from 'postcss-preset-env';
import fontMagician from 'postcss-font-magician';
import cssnano from 'cssnano';

const loadPostCss = (
    { sourceMap, minimize } = { sourceMap: false, minimize: false },
) => {
    const plugins = [
        env({
            stage: 0,
        }), // первый
        fontMagician({
            protocol: 'https:', // второй
        }),
    ];

    if (minimize) {
        // plugins.push(cssnano()); // третий
        plugins.push(cssnano({ preset: [ 'default', { normalizeUrl: false }] })); // третий
    }

    return {
        loader:  'postcss-loader',
        options: {
            plugins,
            sourceMap,
        },
    };
};

const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
    loader:  'css-loader',
    options: {
        modules:        true,
        importLoaders:  1,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
        sourceMap,
    },
});

export const loadDevCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    'style-loader',
                    loadCss({ sourceMap: true }),
                    loadPostCss({ sourceMap: true, minimize: false }),
                ],
            },
        ],
    },
});

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
            filename:      './css/[name].[hash:5].css',
            chunkFilename: './css/[name].[contenthash:5].css',
        }),
    ],
});
