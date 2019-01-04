// Core
import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

export default () => {
    return merge(getCommonConfig(), {
        entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        mode:    'development',
        devtool: 'cheap-module-eval-source-map',
        plugins: [ new HotModuleReplacementPlugin() ],
    });
};
