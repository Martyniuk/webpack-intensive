module.exports = (api) => {
    // const env = api.env();

    // api.cache.using(() => env === 'development');

    api.cache.never();

    return {
        // dev (react-hot-loader нужен)
        // или
        // prod (react-hot-loader не нужен)
    }
}