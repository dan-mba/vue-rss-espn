// vue.config.js
module.exports = {
    publicPath: './',
    outputDir: 'docs',
    configureWebpack: {
        externals :{
            axios: 'axios',
            vue: 'Vue'
        }
    }
}