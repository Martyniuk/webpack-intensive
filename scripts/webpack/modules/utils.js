// Core
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Instruments
import { PROJECT_ROOT, STATIC, BUILD } from '../constants';

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

export const connectStaticServing = () => ({
    plugins: [
        new CopyWebpackPlugin([
            {
                from: `${STATIC}/CD/package.json`,
                to:   `${BUILD}/package.json`,
            },
        ]),
    ],
});
