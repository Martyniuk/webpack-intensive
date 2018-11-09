// Core
import merge from 'webpack-merge';

// Instruments
import { SOURCE } from '../constants';
import getCommonConfig from './webpack.common';
import {
    cleanBuildDirectory,
    connectBuildAnalysis,
    optimizeModules,
    loadProdCss,
    optimizeImages,
} from '../modules';

export default () => {
    const { ANALYZE } = process.env;

    return merge(
        getCommonConfig(),
        {
            mode:    'none',
            entry:   SOURCE,
            devtool: false,
        },
        cleanBuildDirectory(),
        optimizeModules(),
        loadProdCss(),
        optimizeImages(),
        ANALYZE && connectBuildAnalysis(),
    );
};
