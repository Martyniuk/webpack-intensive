module.exports = api => {
    // const env = api.env();
    //  api.cache.using(() => env === 'development');

    api.cache.never();

    return {
        presets: [
            '@babel/preset-react',
            [
                '@babel/preset-env',
                {
                    spec: true, // медленней, более строго
                    loose: false, // быстрей, менее строго
                    debug: false,
                },
            ],
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
    };
};
