// Core
import TerserPlugin from 'terser-webpack-plugin';

export const optimizeBuild = () => {
    return {
        optimization: {
            // production: минификация JavaScript
            minimize:  true,
            minimizer: [ new TerserPlugin() ],

            // production: останавливает эмит сборки при возникновении ошибки во время компиляции
            noEmitOnErrors: true,

            // ✓ Не добавляет в сборку пустые чанки — это уменьшает нагрузку на систему, что ускоряет ребилды.
            removeEmptyChunks:      true,
            // ✓ Объединяет идентичные чанки (которые содержат одинаковые модули)
            mergeDuplicateChunks:   true,
            // ✓ Удаляет модуль из чанка, если этот модуль присутствует в родительском чанке (то есть уже доступен).
            removeAvailableModules: true,
        },
    };
};
