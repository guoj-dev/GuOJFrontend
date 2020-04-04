module.exports = {
    configureWebpack: {
        devServer: {
            historyApiFallback: true,
            proxy: {
                '/api/': {
                    target: 'http://localhost:8000/',
                },
                '/static/': {
                    target: 'http://localhost:8000/',
                }
            }
        }
    }
};
