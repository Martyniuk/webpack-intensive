// Core
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

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
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const connectHotModuleReplacement = () => ({
    plugins: [ new HotModuleReplacementPlugin() ],
});
