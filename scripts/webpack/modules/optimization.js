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

        // ✓ Не добавляет в сборку пустые чанки
        removeEmptyChunks:      true,
        // ✓ Объединяет идентичные чанки (которые содержат одинаковые модули)
        mergeDuplicateChunks:   true,
        // ✓ Удаляет модуль из чанка, если этот модуль присутствует в родительском чанке
        removeAvailableModules: true,
    },
});

// mangle — увечья
