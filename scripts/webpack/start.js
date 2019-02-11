// Node webpack dev server
// 1. ✓ webpack
// 2. ✓ webpack-dev-server (express + webpack-dev-middleware + много хелперов)
// 3. ✓ webpack-hot-middleware
// 4. ✓ конфигурация ⚙️
// 5. ✓ создать компайлер webpack
// 6. ✓ запуск 🚀

// Hot reloading:
// 1. ✓ настроить на сервере
// 2. ✓ настроить на клиенте
// 3. ✓ настроить в вебпаке :)
// 4. ✓ настроить в исходном коде

// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk'); // Раскрашивает консоль

// Config
const getConfig = require('./config/webpack.common');

// Utils
const { choosePort } = require('./utils');

// Constants
const { HOST, PORT } = require('./constants');

const compiler = webpack(getConfig());

(async () => {
    try {
        const choosenPort = await choosePort(PORT);

        if (!choosenPort) {
            console.log(
                chalk.yellowBright('→ It\'s impossible to run the app :('),
            );

            return null;
        }

        const server = new DevServer(compiler, {
            host:               HOST,
            port:               choosenPort,
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

        server.listen(choosenPort, HOST, () => {
            console.log(
                `${chalk.greenBright(
                    '→ Server listening on',
                )} ${chalk.blueBright(`http://${HOST}:${choosenPort}`)}`,
            );
        });
    } catch (error) {
        console.log(chalk.redBright('→ Error!'));
        console.error(error.message || error);
    }
})();
