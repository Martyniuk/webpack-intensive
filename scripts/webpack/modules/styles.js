// Core
import env from 'postcss-preset-env';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const loadPostCss = ({ sourceMap = false } = { sourceMap: false }) => {
    const plugins = [
        env({
            stage: 0,
        }),
    ];

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
                    loadPostCss({ sourceMap: true }),
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
                    MiniCssExtractPlugin.loader,
                    loadCss({ sourceMap: false }),
                    loadPostCss({ sourceMap: false }),
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      'css/[name].[contenthash].css',
            chunkFilename: 'css/[chunkname].[contenthash].[id].css',
        }),
    ],
});
