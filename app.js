//variables
const express = require('express');
const app = express();
const port = 3000
const path=require('path')
const publicPath= path.join(__dirname,'/public');
//Uso estatico.
app.use( express.static(publicPath) )
//Levantar Servidor
app.listen(3000,()=>{console.log('Servidor en puerto 3000 corriendo')});
//Rutas & links.
app.get('localhost:3000/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/home.html'))});
app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/home.html'))});