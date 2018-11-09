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
    connectStaticServing,
} from '../modules';

export default () => {
    const { ANALYZE } = process.env;

    debugger;
    const a = 'hel';
    debugger;
    const b = 'lo';
    debugger;
    const c = a + b;
    debugger;
    const d = c + 1;
    debugger;

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
        connectStaticServing(),
        ANALYZE && connectBuildAnalysis(),
    );
};
