// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

// Instruments
import { BUILD } from '../constants';
import { loadJavaScript, loadCss } from '../modules';

export default () => {
    return merge(
        {
            output: {
                path:     BUILD,
                filename: 'bundle.js',
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title:    'Learn Webpack very well',
                    template: './static/template.html',
                    favicon:  './static/favicon.ico',
                }),
            ],
        },
        loadJavaScript(),
        loadCss(),
    );
};
