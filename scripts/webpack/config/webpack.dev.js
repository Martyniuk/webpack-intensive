// Core
import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

// Instruments
import { SOURCE, HOST, PORT } from '../constants';
import getCommonConfig from './webpack.common';

export default async () => {
    const suggestedPort = await choosePort(HOST, PORT);

    return merge(getCommonConfig(), {
        mode:      'development',
        entry:     [ 'webpack-hot-middleware/client?reload=true&quiet=true', SOURCE ],
        devServer: {
            host: HOST,
            port: suggestedPort,
        },
        devtool: 'cheap-eval-source-map',
        plugins: [ new HotModuleReplacementPlugin() ],
    });
};
