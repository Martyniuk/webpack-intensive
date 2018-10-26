// Core
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');

// Config
const getDevConfig = require('./config/webpack.dev');

// Constants
const { HOST, PORT } = require('./constants');

(async () => {
    const config = await getDevConfig();

    const {
        devServer: { host, port },
    } = config;

    const compiler = webpack(config);
    const server = new devServer(compiler, {
        host,
        port,
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
})();
