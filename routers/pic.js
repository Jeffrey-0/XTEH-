var express = require('express')
var app = express()
var multer = require('multer')

// 配置图片上传路径

//配置diskStorage来控制文件存储的位置以及文件名字等
var storage = multer.diskStorage({
    //确定图片存储的位置
    destination: function (req, file, cb){

        // req.header("Authorization", "123")
        cb(null, './public/img/user')
        // cb(null, 'http://47.106.237.169:8080/trading_platform/image/upload.do')
    },
// ![](http://images2017.cnblogs.com/blog/1283058/201802/1283058-20180201154342296-515041615.png)
//     //确定图片存储时的名字,注意，如果使用原名，可能会造成再次上传同一张图片的时候的冲突
    filename: function (req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
});
//生成的专门处理上传的一个工具，可以传入storage、limits等配置
// var upload = multer({storage: storage});

//设置multer upload
var upload1 = multer({storage: storage})


//配置diskStorage来控制文件存储的位置以及文件名字等
var storage2 = multer.diskStorage({
    // 确定图片存储的位置
    destination: function (req, file, cb){
        // req.header("Authorization", "123")
        cb(null, './public/img/goods')
        // cb(null, './public/img')
        // cb(null, 'C:/xteh/img')
        // cb(null, 'http://120.79.198.193:5000/public/img')
        // cb(null, 'http://47.106.237.169:8080/trading_platform/image/upload.do')
    },
    // path: function (req, file, cb) {
    //     cb(null, 'http://120.79.198.193:5000/public/img')
    // },
// ![](http://images2017.cnblogs.com/blog/1283058/201802/1283058-20180201154342296-515041615.png)
//     //确定图片存储时的名字,注意，如果使用原名，可能会造成再次上传同一张图片的时候的冲突
    filename: function (req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
});
//生成的专门处理上传的一个工具，可以传入storage、limits等配置
// var upload = multer({storage: storage});

//设置multer upload
var upload2 = multer({storage: storage2})

exports.upload1 = upload1
exports.upload2 = upload2