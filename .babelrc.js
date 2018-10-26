module.exports = (api) => {
    // const env = api.env();
    //  api.cache.using(() => env === 'development');

    api.cache.never();

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    // spec: true, // медленней, более строго 
                    loose: true, // быстрей, менее строго
                }
            ]
        ]
    }
}