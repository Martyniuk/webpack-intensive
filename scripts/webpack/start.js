// Core
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');

// Config
const getConfig = require('./webpack.config');

// Constants
const { HOST, PORT } = require('./constants');

const compiler = webpack(getConfig());
