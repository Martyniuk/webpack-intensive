// Core
const { resolve } = require('path');
const { path: PROJECT_ROOT } = require('app-root-path');

console.log('→ PROJECT_ROOT', PROJECT_ROOT);

// the path(s) that should be cleaned
exports.PROJECT_ROOT = PROJECT_ROOT;
exports.BUILD_DIRECTORY = resolve(__dirname, '../../dist');
