// Core
const webpack = require('webpack');
const chalk = require('chalk');

// Config
const getConfig = require('./webpack.config');

const compiler = webpack(getConfig());

compiler.watch({ ignored: [ 'node_modules' ] }, (error, stats) => {
    console.log(chalk.greenBright('✓ webpack is watching...'));
    if (error) {
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return;
    }

    const info = stats.toString('errors-only');

    console.log(info);

    if (stats.hasErrors()) {
        console.log(chalk.redBright('→ Error!'));
        console.error(info);
    }

    if (stats.hasWarnings()) {
        console.log(chalk.yellowBright('→ Warning!'));
        console.warn(info);
    }
});
