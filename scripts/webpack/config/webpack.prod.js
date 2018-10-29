// Core
import merge from 'webpack-merge';

// Instruments
import { SOURCE } from '../constants';
import getCommonConfig from './webpack.common';
import { cleanBuildDirectory } from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:  'development', // временно
            entry: SOURCE,
        },
        cleanBuildDirectory(),
    );
};
