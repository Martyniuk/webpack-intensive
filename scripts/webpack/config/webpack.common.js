// Core
import merge from 'webpack-merge';

// Constants
import { SOURCE, BUILD } from '../constants';

// Webpack Modules
import * as modules from '../modules';

export default () => {
    const { NODE_ENV } = process.env;

    const DEV = NODE_ENV === 'development';

    return merge(
        {
            entry:  [ SOURCE ],
            test: 'test',
            output: {
                path:          BUILD,
                filename:      DEV ? 'js/[name].js' : 'js/[name].[contenthash:5].js',
                chunkFilename: DEV
                    ? 'js/[name].js'
                    : 'js/[name].[contenthash:5].js',
                publicPath: '/',
            },
        },
        modules.setupHtml(),
        modules.loadJavaScript(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.loadFonts(),
        modules.defineEnvVariables({
            __ENV__:  JSON.stringify(NODE_ENV),
            __DEV__:  NODE_ENV === 'development', // development, запросы dev
            __PROD__: NODE_ENV === 'production', // production, заросы prod
        }),
    );
};
