// Core
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');
const { resolve } = require('path');

// Config
const getConfig = require('./webpack.config');

// Contsants
const { HOST, PORT } = require('./constants');

const compiler = webpack(getConfig());

const server = new devServer(compiler, {
    after: (app) => {
        app.use(hot(compiler, {}));
    },
});

server.listen(PORT, HOST, () => {
    console.log(
        `${chalk.greenBright('→ Server listening on')} ${chalk.blueBright(
            `http://${HOST}:${PORT}`,
        )}`,
    );
});
