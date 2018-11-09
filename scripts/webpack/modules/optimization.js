// Core
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { ImageminWebpackPlugin } from 'imagemin-webpack';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

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

        // Определяет дочерние чанки у родительских чанков таким образом, что дочерний чанк
        // не грузится, если родительский уже загрузился
        flagIncludedChunks: true,

        // определяет более часто-используемые модули, и формирует сборку меньшего размера
        occurrenceOrder:    true,
        // анализирует dependency graph и пытается найти доступные для объединения модули.
        concatenateModules: false,

        // ✓ Инструкция вебпаку определить экспорты для каждого модуля,
        // и в результате сгенерировать более эффективный код
        providedExports: true,
        // определяет только использованные экспорты. Помогает Dead Code Elimination минифификаторов
        // удалять неиспользованные экспорты
        usedExports:     true,
        // собирает зависимости более эффективно, если в package.json зависимости тоже стоит этот флаг
        sideEffects:     true,
    },
});

// parent
// ↓
// chunk1
// ↓           ↓
// chunk2      chunk3
//    ↓        ↓
//    →→→→→→   chunk2

// mangle — увечья

export const optimizeImages = () => ({
    plugins: [
        new ImageminWebpackPlugin({
            imageminOptions: {
                plugins: [
                    imageminMozjpeg({
                        progressive: true,
                        quality:     10,
                    }),
                    imageminPngquant({
                        quality: 60,
                    }),
                    imageminSvgo(),
                ],
            },
        }),
    ],
});
