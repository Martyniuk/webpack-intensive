// Core
const webpack = require('webpack');
const chalk = require('chalk');

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


})

// compiler.hooks