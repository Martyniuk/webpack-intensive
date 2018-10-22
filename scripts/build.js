// Core
const webpack = require('webpack');

const getConfig = require('./webpack.config');

const compiler = webpack(getConfig());

compiler.run((error, stats) => {
    if (error) {
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return;
    }
    // ...
    console.log('→ message');
});
