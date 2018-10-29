// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

// Instruments
import { SOURCE, PROJECT_ROOT } from '../constants';
import getCommonConfig from './webpack.common';

export default () => {
    return merge(getCommonConfig(), {
        mode:    'development', // временно
        entry:   SOURCE,
        plugins: [
            new CleanWebpackPlugin([ 'build' ], {
                root: PROJECT_ROOT,
            }),
        ],
    });
};
