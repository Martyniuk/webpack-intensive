// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

// Webpack Modules
import * as modules from '../modules';

// Constants
import { PROJECT_ROOT } from '../constants';

export default () => {
    const { ANALYZE } = process.env;

    return merge(
        getCommonConfig(),
        {
            mode:    'none', // production
            devtool: false,
            plugins: [
                new CleanWebpackPlugin([ 'build' ], {
                    root: PROJECT_ROOT,
                }),
            ],
        },
        modules.optimizeBuild(),
        ANALYZE && modules.setupBuildAnalysis(),
    );
};
