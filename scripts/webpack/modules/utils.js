// Core
import { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Instruments
import { PROJECT_ROOT, STATIC, BUILD } from '../constants';

export const defineEnvVariables = (variables = {}) => ({
    plugins: [ new DefinePlugin(variables) ],
});

export const cleanBuildDirectory = () => ({
    plugins: [
        new CleanWebpackPlugin([ 'build' ], {
            root: PROJECT_ROOT,
        }),
    ],
});

export const setupBuildAnalysis = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const setupStaticServing = () => ({
    plugins: [
        new CopyWebpackPlugin([
            {
                from: `${STATIC}/CI/now.json`,
                to:   `${BUILD}/now.json`,
            },
        ]),
    ],
});
