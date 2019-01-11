// Core
import { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const defineEnvVariables = (variables = {}) => ({
    plugins: [ new DefinePlugin(variables) ],
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
                to:   `${BUILD}/package.json`,
            },
        ]),
    ],
});