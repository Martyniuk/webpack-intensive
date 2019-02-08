// 1. ✓ webpack
// 2. ✓ webpack-dev-server (express + webpack-dev-middleware + много хелперов)
// 3. ✓ webpack-hot-middleware
// 4. ✓ конфигурация ⚙️
// 5. ✓ создать компайлер webpack
// 6. ✓ запуск 🚀

// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk'); // Раскрашивает консоль

// Config
const getConfig = require('./webpack.config');

// Hot reloading:
// 1. ✓ настроить на сервере
// 2. ✓ настроить на клиенте
// 3. настроить в исходном коде

// Constants
const { HOST, PORT } = require('./constants');

const compiler = webpack(getConfig());

const server = new DevServer(compiler, {
    host:               HOST,
    port:               PORT,
    historyApiFallback: true,
    overlay:            true,
    quiet:              true,
    clientLogLevel:     'none',
    noInfo:             true,
    after:              (app) => {
        app.use(
            hot(compiler, {
                log: false,
            }),
        );
    },
});

server.listen(PORT, HOST, () => {
    console.log(
        `${chalk.greenBright('→ Server listening on')} ${chalk.blueBright(
            `http://${HOST}:${PORT}`,
        )}`,
    );
});
