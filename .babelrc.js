module.exports = api => {
    api.cache.never(); // TODO: обсудить

    return {
        presets: [
            // preset1,
            // preset2,
            [
                '@babel/preset-env',
                {
                    debug: true,
                },
            ],
        ],
    };
};
