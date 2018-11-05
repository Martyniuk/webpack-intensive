// Core
import merge from 'webpack-merge';

// Instruments
import { BUILD } from '../constants';
import {
    loadJavaScript,
    loadFonts,
    connectHtml,
    loadImages,
    loadSvg,
    defineEnvVariables,
} from '../modules';

export default () => {
    const { NODE_ENV } = process.env;

    return merge(
        {
            output: {
                path:     BUILD,
                filename: './js/[name].js',
            },
        },
        connectHtml(),
        loadJavaScript(),
        loadFonts(),
        loadImages(),
        loadSvg(),
        defineEnvVariables({
            __ENV__:  JSON.stringify(NODE_ENV),
            __DEV__:  NODE_ENV === 'development',
            __PROD__: NODE_ENV === 'production',
        }),
    );
};
