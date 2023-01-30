const express=require('express');
const app=express();


// app.set('view engin','ejs');


app.get('/about',(req,res)=>{
//    res.send('This is about page');
// res.json({
//     name:"Md Mahadi Hasan",
//     uiversity:"HSTU"
// })
  res.sendStatus(403);
})





app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})