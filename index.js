const express=require('express');
const app=express();


 app.set('view engin','ejs');


app.get('/about',(req,res)=>{
res.format({
    'text/plain':()=>{
        res.send('Hi')
    },
    'text/html':()=>{
     res.render('pages/about.ejs',{
        name:'Muslime Country all over the world'
     })
    },
    'application/json':()=>{
        res.json({title:"this is json key value system"})
    },
    default:()=>{
        res.status(403).send('Not Acceptable')
    }
})
})





app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})