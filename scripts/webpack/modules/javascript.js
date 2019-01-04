export const loadJavaScript = () => ({
    test: /\.js$/,
    use:  {
        loader:  'babel-loader',
        options: {
            compact: false, // 'auto' === true
        },
    },
});
