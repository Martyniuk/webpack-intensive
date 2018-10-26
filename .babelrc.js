module.exports = (api) => {
    // const env = api.env();
    //  api.cache.using(() => env === 'development');

    api.cache.never();

    api.cache.();

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