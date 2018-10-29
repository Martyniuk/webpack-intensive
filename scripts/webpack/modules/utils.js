// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';

// Instruments
import { PROJECT_ROOT } from '../constants';

export const cleanBuildDirectory = () => ({
    plugins: [
        new CleanWebpackPlugin([ 'build' ], {
            root: PROJECT_ROOT,
        }),
    ],
});
