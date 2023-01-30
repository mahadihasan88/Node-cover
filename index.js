const express=require('express');




const app=express();



  

app.set('view engin','ejs');


app.get('/about',(req,res)=>{
    res.render('pages/about.ejs',{
        name:"United Bangladesh"
    });
    console.log(req.route);
})





app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})