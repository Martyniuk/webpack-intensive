// Core
import webpack from 'webpack';
import devServer from 'webpack-dev-server'; // webpack-dev-middleware
import hot from 'webpack-hot-middleware';
import chalk from 'chalk';

// Config
import getConfig from './config/webpack.dev';

// Constants
import { HOST, PORT } from './constants';

const compiler = webpack(getConfig());

const server = new devServer(compiler, {
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
