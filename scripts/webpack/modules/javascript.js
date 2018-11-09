export const loadJavaScript = () => {
    return {
        module: {
            rules: [
                {
                    test:    /\.js$/,
                    include: [ 'node_modules/react' ],
                    exclude: [ 'node_modules' ],
                    use:     {
                        loader:  'babel-loader',
                        options: {
                            compact: false,
                        },
                    },
                },
            ],
        },
    };
};
