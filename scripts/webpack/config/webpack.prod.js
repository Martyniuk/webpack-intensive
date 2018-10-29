// Core
import merge from 'webpack-merge';

// Instruments
import { SOURCE } from '../constants';
import getCommonConfig from './webpack.common';

export default () => {
    return merge(getCommonConfig(), {
        mode:  'development', // временно
        entry: SOURCE,
    });
};
