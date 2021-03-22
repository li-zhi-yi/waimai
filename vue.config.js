//引入path
let path=require('path');

//判断环境
if(process.env.NODE_ENV==='production'){
    //发布环境
    module.exports={
        //静态资源发布位置
        outputDir:path.join(process.cwd(),'../server/static/home'),
        //发布模板
        indexPath:path.join(process.cwd(),'../server/static/home.html'),
        //静态资源发布位置
        publicPaht:'/staitc/homt/'
    }
}else{
    //开发环境
    module.exports={

    }
}