const express=require('express');
const app=express();


 app.set('view engin','ejs');
app.get('/mahadi',(req,res)=>{
    res.send("this is the redirected page from about page")
})

app.get('/about',(req,res)=>{
res.set('department','CSE');
console.log(res.get('department'));
res.end();
})





app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})