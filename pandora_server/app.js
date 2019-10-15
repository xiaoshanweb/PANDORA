//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"pandora",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你
var server = express();
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块?????????
server.use(session({
    secret:"128位字符串",//安全字符串
    resave:true,//请求时更新数据
    saveUninitialized:true//保存初始数据
 }))
 //6:配置项目静态目录 public
 server.use(express.static("public"))
 //7:创建express对象绑定4000端口
 server.listen(4000);
 //8:功能一:完成用户登录
server.get("/login",(req,res)=>{
    //(1)获取脚手架参数 uname upwd
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    //(2)创建sql语句查询
    var sql = "SELECT uid FROM user WHERE uname = ? AND upwd = ?";
    //(3)执行sql语句
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        //(4)获取执行结果
        //(5)判断查询是否成功 result.length
        //result:{uid:1}
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码有误"})
        }else{
            res.send({code:1,msg:"登录成功"});
        }
        //(6)将结果返回脚手架
    })
})
//http://127.0.0.1:4000/login?uname=zheng&upwd=111111 
//9.功能二：完成用户注册
server.get("/register",(req,res)=>{
    //(1)获取脚手架参数
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var email = req.query.email;
    var phone = req.query.phone;
    //(2)创建sql语句
    var sql = `INSERT INTO user(uname,upwd,email,phone) VALUES('${uname}','${upwd}','${email}','${phone}')`;
    pool.query(sql,[uname,upwd,email,phone],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows==1){
            res.send({code:1,msg:"注册成功"});
        }else{
            res.send({code:-1,msg:"注册失败"});
        }
    })
})
//http://127.0.0.1:4000/register?uname=yang&upwd=666666&email=345@136.com&phone=15632456234

//功能三:主页商品信息的调用
server.get("/index_pro",(req,res)=>{
    //查询
    var sql = `SELECT title,price,pic FROM index_product`;
    pool.query(sql,(err,result)=>{
        if(err)  throw err;
        res.send({code:1,msg:"查询成功",data:result});
        //console.log(result);
    })
})

//功能三:二级页面popular_gift商品信息调用
server.get("/pop_pro",(req,res)=>{
    // //第一个参数
    // var pno = req.query.pno;
    // //第二个参数
    // var ps  = req.query.ps;
    //查询
    var sql =  `SELECT title,price,pic,pic1 FROM product LIMIT 6`;
    //执行sql语句
    pool.query(sql,(err,result)=>{
        if(err)     throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})

//功能四:二级页面stringing商品信息调用
server.get("/ring_pro",(req,res)=>{
    var sql =  `SELECT title,price,pic,pic1 FROM product LIMIT 6,3`;
    pool.query(sql,(err,result)=>{
        if(err)     throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})
server.get("/ring_pro1",(req,res)=>{
    var sql =  `SELECT title,price,pic,pic1 FROM product LIMIT 10,3`;
    pool.query(sql,(err,result)=>{
        if(err)     throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})
//功能五:二级页面gift商品信息调用
server.get("/gift_pro1",(req,res)=>{
    var sql =  `SELECT title,price,pic FROM present LIMIT 6`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})
server.get("/gift_pro2",(req,res)=>{
    var sql = `SELECT title,price,pic FROM present LIMIT 6,6`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})
server.get("/gift_pro3",(req,res)=>{
    var sql = `SELECT title,price,pic,pic1 FROM present LIMIT 12,6`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})
server.get("/gift_pro4",(req,res)=>{
    var sql = `SELECT title,price,pic,pic1 FROM present LIMIT 18,6`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})