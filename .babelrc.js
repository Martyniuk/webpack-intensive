module.exports = (api) => {
    // const env = api.env();
    //  api.cache.using(() => env === 'development');

    api.cache.never();

    return {
        presets: [
            [
                '@babel/preset-env',
                // {

                // }
            ]
        ]
    }
}