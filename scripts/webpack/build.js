// Core
const webpack = require('webpack');
const chalk = require('chalk');

// Config
const getConfig = require('./webpack.config');

const compiler = webpack(getConfig());

compiler.run((error, stats) => {
    if (error) {
        // ошибка конфигурации
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return;
    }

    const info = stats.toString({
        colors: true,
        hash: true,
        version: true,
        timings: true,
        env: true,
        chunks: false,
        modules: false,
        children: false,
        publicPath: true,
        reasons: true,
        source: false,
    });

    console.log(chalk.greenBright('✓ Build completed.'));
    console.log(info);

    if (stats.hasErrors()) {
        // ошибка во время компляции  (битый импорт, ошибка синтаксиса, etc)
        console.log(chalk.redBright('→ Error!'));
        console.error(info);
    }

    if (stats.hasWarnings()) {
        // ворнинг во время компляции
        console.log(chalk.yellowBright('→ Warning!'));
        console.warn(info);
    }
});
