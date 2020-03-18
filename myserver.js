var express = require('express');
var app=express();

app.set('view engine','jade');
var port = process.env.PORT || 3000;

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//khi mo website mac dinh
app.get("/",(req,res)=>{
    res.render('index');
})

app.get('/views',(req,res)=>{
    res.render('category');
})

app.get('/views2',(req,res)=>{
    res.render('category10_12');
})

app.get('/views3',(req,res)=>{
    res.render('category12_14');
})

app.get('/form',(req,res)=>{
    res.render('form');
})

app.post('/saveForm',(req,res)=>{
    //lay thong tin tu textbox ten la yourName
    const yourName = req.body.yourName;
    res.render('confirm',{name:yourName});
    //console.log(yourName);

})

var server=app.listen(port, function() {});