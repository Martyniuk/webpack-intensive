// Core
import merge from 'webpack-merge';

// Instruments
import { BUILD } from '../constants';
import { loadJavaScript, loadCss, loadFonts, connectHtml } from '../modules';

export default () => {
    return merge(
        {
            output: {
                path:     BUILD,
                filename: './js/bundle.js',
            },
        },
        connectHtml(),
        loadJavaScript(),
        loadCss(),
        loadFonts(),
    );
};
