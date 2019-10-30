// vue.config.js
module.exports = {
    publicPath: './',
    configureWebpack: {
        externals :{
            axios: 'axios',
            vue: 'Vue'
        }
    }
}