const express=require('express')
const bodyParser =require('body-parser')
const app=express()
const mysql = require('mysql')
app.use(bodyParser.json())

//处理post请求
app.post('/',(req,res) => {
  console.log(req.body)
  res.json(req.body)
})

app.post('/show',(req,res)=>{
  console.log(req.body.name)
  const a=req.body.name
  var connection=mysql.createConnection({
    host:'localhost',
    user:'你的用户名',
    password:'你的密码',
    database:'数据库名字'
  })
  connection.connect();
  connection.query("select detail from price where name='"+a+"'",function(error,results,fields){
    if(error) throw console.error;
    res.json(results)
    console.log(results)
    
  })
  connection.end();
  
})

app.get('/',(req,res)=>{
  var connection = mysql.createConnection({
    host:'localhost',
    user:'你的用户名',
    password:'你的密码',
    database:'数据库名字'
  });
  connection.connect();
  //查找所有的人物名字返回给客户端。其实没必要（测试用的）
  connection.query('select name from price',function(error,results,fields){
    if(error) throw error;
    res.json(results)
    // console.log(results)
  })
  connection.end();
})

app.listen(3000,()=>{
  console.log('server running at http://127.0.0.1:3000')
})
