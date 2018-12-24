module.exports = api => {
    api.cache.never(); // TODO: обсудить

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    debug: true,
                    useBuiltIns: 'usage', // более прокачаный транспайлинг
                    spec: true, // более строгие проверки, более медленный код, более стабильный код
                    loose: false, // противоположность loose ↑
                    modules: 'commonjs', // TODO: обсудить
                },
            ],
        ],
    };
};
