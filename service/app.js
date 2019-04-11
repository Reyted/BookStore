const userService=require('./service/userService.js');
const ejs=require('ejs');
const express=require('express');

const app=express();

app.set('views',__dirname+'/views');
app.use(express.static(__dirname+'/publics'));
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/username',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    let username=req.body.username;
    userService.vertifyUsername(username,function(results){
        res.json(results);
    })
});

app.post("/form",(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	res.send("log");
})

app.get('/log',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    let username=req.query.username;
    let pwd=req.query.pwd;
    userService.login(username,pwd,function(results){
        if(results){
            res.json(results);
        }else{
            res.json(false);
        }
    });
});

app.post('/reg.do',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
     let username=req.body.username;
     let pwd=req.body.pwd;
     userService.reg(username,pwd,function(results){
         if(results=='erro'){
             res.json("system_erro");
             return;
         }
         if(results=='username_exit'){
             res.json("username_exit");
             return;
         }
         res.json(true);
     })
});


app.post('/insert',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    let data=req.body;
    userService.insertBook(data,function(result){
    	res.json(result);
    })
})

app.get('/allproducts',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	userService.selectAll(function(result){
		res.json(result);
	})
})

app.get("/searchProducts",(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	let data=req.query.keywords;
	userService.selectKeywords(data,function(result){
		res.json(result);
	})
})

app.get("/insertShopping",(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	let data=req.query;
	userService.insertShopping(data,function(result){
		res.json(result);
	})
	console.log(data);
})

app.listen(7778,()=>{
    console.log('ok');
});