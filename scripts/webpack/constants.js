// Core
const { path: PROJECT_ROOT } = require('app-root-path');
const { resolve } = require('path');

// Network
exports.HOST = 'localhost';
exports.PORT = 3000;

// Paths
exports.SOURCE = resolve(PROJECT_ROOT, './source');
exports.BUILD = resolve(PROJECT_ROOT, './build');
