module.exports = api => {
    const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV || 'development'

    api.cache.never();
    // api.cache(() => env === 'development');


    console.log('→ env', env);

    return {
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    debug: false,
                    useBuiltIns: 'usage', // более прокачаный транспайлинг
                    spec: true, // более строгие проверки, более медленный код, более стабильный код
                    loose: false, // противоположность loose ↑
                    modules: false, // false === ECMAScript modules
                },
            ],
        ],
        plugins: [
            '@babel/proposal-class-properties',
            'react-hot-loader/babel',
        ],
    };
};
