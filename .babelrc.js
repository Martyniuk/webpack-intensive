module.exports = api => {
    const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV || 'development'

    api.cache.never();
    // api.cache(() => env === 'development');

    const plugins = [
        '@babel/proposal-class-properties',
        '@babel/syntax-dynamic-import',
    ];

    if (env === 'development') {
        plugins.push('react-hot-loader/babel');
    }

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
        plugins,
    };
};
