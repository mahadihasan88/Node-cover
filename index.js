const express=require('express');
const app=express();


 app.set('view engin','ejs');


app.get('/about',(req,res)=>{
 res.cookie('id','1802006');
 res.end();
})





app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})