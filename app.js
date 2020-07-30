var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var session = require('express-session')
const fs = require('fs')
// var multer = require('multer')


var router_session = require('./routers/session.js')
var router_main = require('./routers/main.js')
var router_user = require('./routers/user.js')

app.use('/favicon.ico',express.static(path.join(__dirname, './favicon.ico')))
app.use('/public/',express.static(path.join(__dirname, './public/')))
// app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static(path.join(__dirname, './node_modules/')))
// app.use('/node_modules/',express.static('./node_modules/'))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))
// app.set('views', path.join('./views/'))
 
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json()) 

// // 设置请求头
// app.use(function(req, res, next) { 
//   res.header("Authorization", "123")
// })
// 在Express这个框架中，默认不支持session和cookie
// 但是我们可以使用第三方中间件：express-session 来解决
// 1.npm install express-session
// 2.配置(一定要在配置路由之前)
// 3.使用
//
// 配置跨域请求中间件(服务端允许跨域请求)
// var allowCors = function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", req.headers.origin); // 设置允许来自哪里的跨域请求访问（req.headers.origin为当前访问来源的域名与端口）
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"); // 设置允许接收的请求类型
//     res.header("Access-Control-Allow-Headers", "Content-Type,request-origin"); // 设置请求头中允许携带的参数
//     res.header("Access-Control-Allow-Credentials", "true"); // 允许客户端携带证书式访问。保持跨域请求中的Cookie。注意：此处设true时，Access-Control-Allow-Origin的值不能为 '*'
//     res.header("Access-control-max-age", 1000); // 设置请求通过预检后多少时间内不再检验，减少预请求发送次数
//     res.header("Authorization", "123");
//     req.header("Authorization", "123");
//     next();
// };
// app.use(allowCors); // 使用跨域中间件

app.use(session({
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true
}))


// 把路由挂载进来
app.use(router_session)
app.use(router_main)
app.use(router_user)

app.listen(5000, function () {
	console.log('running...')
})

// 出错后仍然不会停止node进程
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});


function hhh(a, b) {
	
}