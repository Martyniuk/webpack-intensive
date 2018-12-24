module.exports = api => {
    api.cache.never(); // TODO: обсудить

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    debug: true,
                },
            ],
        ],
    };
};
