// Core
import { DefinePlugin } from 'webpack';
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

export const defineEnvVariables = (variables = {}) => ({
    plugins: [ new DefinePlugin(variables) ],
});

export const connectBuildAnalysis = () => ({
    plugins: [ new BundleAnalyzerPlugin() ],
});
