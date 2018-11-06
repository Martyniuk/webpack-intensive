// Core
import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';

// Network
export const HOST = 'localhost';
export const PORT = 3000;

// Paths
export { PROJECT_ROOT };
export const SOURCE = resolve(PROJECT_ROOT, './source');
export const BUILD = resolve(PROJECT_ROOT, './build');
export const STATIC = resolve(PROJECT_ROOT, './static');

// Formatting
export const CHUNK_NAME_JS = '[name].[chunkhash].[id].js';
export const CHUNK_NAME_CSS = '[name].[contenthash].[id].css';
export const CHUNK_NAME_ASSET = '[name].[hash:5].[ext]';

// О внутренних плейсхолдерах webpack:
// https://webpack.js.org/configuration/output/#output-filename

// О плейсхолдерах file-loader:
// https://github.com/webpack-contrib/file-loader#placeholders
