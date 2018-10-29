// Core
import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';

// Network
export const HOST = 'localhost';
export const PORT = 3000;

// Paths
export const PROJECT_ROOT = PROJECT_ROOT;
export const SOURCE = resolve(PROJECT_ROOT, './source');
export const BUILD = resolve(PROJECT_ROOT, './build');
