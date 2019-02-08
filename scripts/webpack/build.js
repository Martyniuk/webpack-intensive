// 1. ✓ webpack
// 2. ✓ конфигурация ⚙️
// 3. создать компайлер webpack
// 4. запуск 🚀

// Core
const webpack = require('webpack');
const chalk = require('chalk'); // Раскрашивает консоль

// Config
const config = require('./webpack.config');

const compiler = webpack(config);

compiler.run((error, stats) => {
    if (error) {
        // ошибка конфигурации
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return
    }
});
