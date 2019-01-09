// Core
import { DefinePlugin } from 'webpack';

export const defineEnvVariables = (variables = {}) => ({
    plugins: [ new DefinePlugin(variables) ],
});