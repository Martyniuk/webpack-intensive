module.exports = (api) => {
    api.cache.never();

    return {
        // dev (react-hot-loader нужен)
        // или
        // prod (react-hot-loader не нужен)
    }
}