const express=require('express');


const app=express();
const admin=express();


app.route('/about')
.get((req,res)=>{
    res.send(' Welcome to About  page')
})
.post((req,res)=>{
    res.send(' Welcome to Post  page')
})
.put((req,res)=>{
    res.send(' Welcome to Put  page')
});



app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})