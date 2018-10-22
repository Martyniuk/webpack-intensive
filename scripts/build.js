// Core
const webpack = require('webpack');

const getConfig = require('./webpack.config');

const compiler = webpack(getConfig());

compiler.run(() => {
    // ...
    console.log('→ message');
})