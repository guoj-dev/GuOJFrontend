module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/': {
                    target: 'http://localhost:8000',
                }
            }
        }
    }
  }