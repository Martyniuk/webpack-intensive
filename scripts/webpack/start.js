// 1. ✓ webpack
// 2. ✓ конфигурация ⚙️
// 3. ✓ создать компайлер webpack
// 4. ✓ запуск 🚀

// Core
const webpack = require('webpack');
const chalk = require('chalk'); // Раскрашивает консоль

// Config
const getConfig = require('./webpack.config');

const compiler = webpack(getConfig());