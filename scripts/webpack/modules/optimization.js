// Core
import TerserPlugin from 'terser-webpack-plugin';

export const optimizeBuild = () => {
    return {
        optimization: {
            // production: минификация JavaScript
            minimize:  true,
            minimizer: [ new TerserPlugin() ],
        },
    };
};
