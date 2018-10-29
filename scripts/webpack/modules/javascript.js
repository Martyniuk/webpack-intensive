export const loadJavaScript = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use:  {
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
