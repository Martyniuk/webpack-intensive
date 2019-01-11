// Core
import env from 'postcss-preset-env';

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

const loadProdCss = () => {};
