export const loadFonts = () => ({
    module: {
        rules: [
            {
                test: /\.(woff2|eot)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: `./fonts/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
        ],
    },
});

export const connectHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            title:    'Learn Webpack',
            template: `${STATIC}/template.html`,
            favicon:  `${STATIC}/favicon.ico`,
        }),
    ],
});
