module.exports= {
    devServer: {
        proxy: {
            '/api':{
                target: "http://wx.hengfeng-zl.cn",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    publicPath: './'
}