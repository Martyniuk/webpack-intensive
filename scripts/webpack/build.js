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

        return null;
    }

    console.log(chalk.greenBright('✓ Build completed'));

    if (stats.hasErrors()) {
        // ошибка во время компиляции (битый импорт, ошибка синтаксиса, etc)
        console.log(chalk.redBright('→ Error!'));
        // console.error(info);
    }

    if (stats.hasWarnings()) {
        // ворнинг во время компиляции
        console.log(chalk.yellowBright('→ Warning!'));
        // console.warn(info);
    }
});
