// Core
import TerserPlugin from 'terser-webpack-plugin';

export const optimizeBuild = () => {
    return {
        optimization: {
            // production: минификация JavaScript
            minimize:  false,
            minimizer: [ new TerserPlugin() ],

            // production: останавливает эмит сборки при возникновении ошибки во время компиляции
            noEmitOnErrors: true,

            // ✓ Не добавляет в сборку пустые чанки — это уменьшает нагрузку на систему, что ускоряет ребилды.
            removeEmptyChunks:      true,
            // ✓ Объединяет идентичные чанки (которые содержат одинаковые модули)
            mergeDuplicateChunks:   true,
            // ✓ Удаляет модуль из чанка, если этот модуль присутствует в родительском чанке (то есть уже доступен).
            removeAvailableModules: true,

            // production: определяет более часто-используемые модули, и формирует сборку наиболее меньшего размера
            // TODO webpack 5 remove optimization.occurrenceOrder
            occurrenceOrder:    true,
            // production: анализирует dependency graph и пытается найти доступные для объединения модули
            // ? эта настройка зависит от providedExports и usedExports
            concatenateModules: false, // scope hoisting, module concatenation

            // ✓ определяет экспорты для каждого модуля, в результате сгенерировать более эффективный код
            providedExports: true,
            // production: определяет только использованные экспорты.
            // Помогает DCE минифификаторов удалять неиспользованные экспорты.
            usedExports:     true,
            // production: собирает зависимости более эффективно, если в package.json зависимости тоже стоит этот флаг.
            // ? эта настройка зависит от providedExports и usedExports
            sideEffects:     true,

            // development: вместо числовых идентификаторов даёт модулям более понятные имена
            // TODO webpack 5 add `moduleIds: "named"` default for development
            // TODO webpack 5 add `moduleIds: "size"` default for production
            // TODO webpack 5 remove optimization.namedModules
            namedModules: true,

            // development: вместо числовых идентификаторов даёт чанкам более понятные имена
            // TODO webpack 5 add `chunkIds: "named"` default for development
            // TODO webpack 5 add `chunkIds: "size"` default for production
            // TODO webpack 5 remove optimization.namedChunks
            namedChunks: true,

            // TODO: splitChunks
            // TODO: runtimeChunk
        },
    };
};
