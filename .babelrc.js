module.exports = api => {
    // const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV

    // api.cache.using(() => env === 'development'); // TODO: прорисёрчить

    api.cache.never();

    const plugins = [];

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
                    spec: true, // specification, делает код более медленным, но более надёжным
                    loose: false, // делает код более быстрым, но отходит от стандарта
                    modules: false, // webpack хорошо работает только с ES2015 модулями
                },
            ],
        ],
        plugins: ['@babel/proposal-class-properties'],
        // dev (react-hot-loader нужен)
        // или
        // prod (react-hot-loader не нужен)
    };
};
