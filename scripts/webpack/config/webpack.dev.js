// Core
import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

// Webpack Modules
import * as modules from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
            mode:    'development',
            devtool: 'cheap-module-eval-source-map',
            plugins: [ new HotModuleReplacementPlugin() ],
        },
        modules.loadDevCss(),
    );
};
