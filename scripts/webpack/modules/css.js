// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import env from 'postcss-preset-env';
import fontMagician from 'postcss-font-magician';

const loadPostCss = ({ sourceMap } = { sourceMap: false }) => {
    const plugins = [
        env({
            stage: 0,
        }),
        fontMagician({
            protocol: 'https:',
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
                    MiniCssExtractPlugin.loader, // mini-css-loader
                    loadCss({ sourceMap: false }), // css-loader
                    loadPostCss({ sourceMap: false }), // postcss-loader
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ],
});
