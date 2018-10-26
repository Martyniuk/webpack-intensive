// Core
const webpack = require('webpack');
// const MemFs = require('memory-fs');
const chalk = require('chalk');

// Config
const getConfig = require('./config/webpack.common');
// const memFs = new MemFs();

const compiler = webpack(getConfig());

// compiler.outputFileSystem = memFs;

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
