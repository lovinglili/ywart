const path = require('path')

function resolve(url){
    return path.resolve(__dirname,url);
}

module.exports={
    devServer:{
        port:8899,
        proxy:{
            '/ycmain':{
                target:'https://openapi.ywart.com/',
                changeOrigin:true,
                pathRewrite:{
                    '^/ycmain':''
                }
            }
        }
    },
    chainWebpack:(config)=>{//配置别名
        config
            .resolve
            .alias
            .set('@styles',resolve('src/stylesheets'))
            .set('@utils',resolve('src/util'))
            .set ('@c',resolve('src/components'))
            .set('@libs',resolve('src/libs'))
            .set('@page',resolve('src/pages'))
    }
}