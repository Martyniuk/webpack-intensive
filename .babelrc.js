module.exports = api => {
    const env = api.env();

    // api.cache.never(); 
    api.cache(() => env === 'development');

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    debug: true,
                    useBuiltIns: 'usage', // более прокачаный транспайлинг
                    spec: true, // более строгие проверки, более медленный код, более стабильный код
                    loose: false, // противоположность loose ↑
                    modules: false, // false === ECMAScript modules
                },
            ],
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
    };
};
