module.exports = api => {
    // const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV

    // api.cache.using(() => env === 'development'); // TODO: прорисёрчить

    api.cache.never();

    return {
        presets: [
            '@babel/env',
            {
                debug: true,
            },
        ],
        // dev (react-hot-loader нужен)
        // или
        // prod (react-hot-loader не нужен)
    };
};
