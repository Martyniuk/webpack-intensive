// Core
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export const optimizeModules = () => ({
    optimization: {
        // Минификация JavaScript
        minimize:  false,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
            }),
        ],
        // Останавливает эмит сборки при возникновении ошибки во время компиляции
        noEmitOnErrors: true,
    },
});

// mangle — увечья
