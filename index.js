const express=require('express');


const app=express();
const admin=express();


app.param('id',(req,res,next,id)=>{

     const userData={
        'userid':id,
        'username':"Munirujjaman",
        'college':'Govt Kc College Jhenaidah'
     }
     req.info=userData;


    next();

})



app.get('/cse/:id',(req,res)=>{
       console.log(req.info);
    res.send('Get Operation Perform')
})



app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})