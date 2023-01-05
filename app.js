//variables
const express = require('express');
const app = express();
// const port = 3000
const path=require('path');
const { start } = require('repl');
const { Script } = require('vm');
const publicPath= path.join(__dirname,'/public');
//Uso estatico.
app.use( express.static(publicPath) )
//Levantar Servidor
const port = process.env.PORT || 3000;
app.listen(port,() =>console.log('servidor corriendo en el puerto $(port)'));
//Rutas & links.
app.get('localhost:3000/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/home.html'))});
app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/home.html'))});
app.get('/register',(req,res)=>{res.sendFile(path.join(__dirname,'./views/register.html'))})
app.get('/login',(req,res)=>{res.sendFile(path.join(__dirname,'./views/login.html'))})


Scripts:{
    start:"node app.js"
    test:"nodemon src/app.js"
}