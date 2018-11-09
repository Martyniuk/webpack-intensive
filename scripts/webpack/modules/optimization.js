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

        // Конфигурация SplitChunksPlugin
        splitChunks: {
            // Режим разделения кода. По-умолчанию работает режим async.
            chunks:  'async',
            // Минимальный размер нового чанка для отделения
            minSize: 30000,
            // Максимальный размер нового чанка для отделения
            maxSize: 0,

            // Минимальное количество чанков, которые зависят от модуля
            // перед отделением этого модуля в отдельный чанк
            minChunks: 1,

            // Максимальное количество одновременных параллельных запросов чанков для асинхронного сплит-поинта (динамический импорт)
            // Всегда предпочитаются чанки большего размера.
            maxAsyncRequests:       5,
            // Максимальное количество одновременных параллельных запросов чанков на один entrypoint
            // Всегда предпочитаются чанки большего размера.
            maxInitialRequests:     3,
            // Символ-разделитель имени сплит-чанка (напр. vendors~main.js);
            automaticNameDelimiter: '~',
            // Определяет имя нового чанка
            name:                   true,

            // Мо-умолчанию cacheGroups наследует от остальных опций splitChunks ↑.
            // Уникальные для cacheGroups только test, priority и reuseExistingChunk.
            // Ключ каждой кеш-группы определяет её имя.
            // По-умолчанию вебпак устанавливает две кеш-группы:
            cacheGroups: {
                // Дефолтная кеш-группа. Выносит все зависимости из node_nodules в чанк vendors.
                vendors: {
                    // Перезаписанная опция
                    chunks:    'initial',
                    minChunks: 2,
                    // Выбирает модули, внесённые в данную кеш-группу. Если не указать будут выбраны все модули.
                    test:      /[\\/]node_modules[\\/]/,
                    priority:  -10,
                },
                default: {
                    // Дефолтная кеш-группа. Выносит любой модуль-зависимость в отдельный чанк default
                    // при условии дублирования модуля-зависимости хотя-бы в двух чанках.
                    minChunks:          2,
                    // Приоритет кеш-группы. Если модуль попадает сразу в несколько кеш-групп, то выбирется
                    // кеш-группа с более высоким priority, или которая составляет чанк большего размера.
                    // У дефолтных кеш-групп отрицательный приоритет,
                    // поэтому кастомные кеш-группы приоритетнее (их priority 0 по-умолчанию).
                    priority:           -20,
                    // Если чанк содержит уже существующий отделённый чанк,
                    // то используется этот уже существующий отделённый чанк вместо создания нового
                    reuseExistingChunk: true,
                },
            },
        },
        // Выносит webpack runtime каждого entrypoint в отдельный чанк.
        runtimeChunk: true,
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
