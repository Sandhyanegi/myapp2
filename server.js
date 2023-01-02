const express=require("express");
const app=express();
const port =3025;

app.get('/',(req,res)=>{
    res.send("hello world")
})
   


app.get('/index',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(port,()=>{
    console.log('listening at port ${port}')
})