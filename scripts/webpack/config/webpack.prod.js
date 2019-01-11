// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

// Webpack Modules
import * as modules from '../modules';

export default () => {
    const { ANALYZE } = process.env;

    return merge(
        getCommonConfig(),
        {
            mode:    'none', // production
            devtool: false,
        },
        // modules.optimizeImages(),
        modules.optimizeBuild(),
        modules.loadProdCss(),
        modules.cleanBuildDirectory(),
        modules.setupStaticServing(),
        ANALYZE && modules.setupBuildAnalysis(),
    );
};
