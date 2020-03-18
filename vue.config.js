module.exports = {
    configureWebpack: {
        devServer: {
            historyApiFallback: true,
            proxy: {
                '/': {
                    target: 'http://localhost:8000',
                }
            }
        }
    }
  }