export const loadJavaScript = () => ({
    module: {
        rules: [
            {
                test:    /\.js$/,
                use:     {
                    loader:  'babel-loader',
                    options: {
                        compact: false, // 'auto' === true
                    },
                },
            },
        ],
    },
});
