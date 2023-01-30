const express=require('express');


const app=express();
const admin=express();


admin.get('/dashboard/content',(req,res)=>{
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard')
});

app.use('/admin',admin)

app.get('/',(req,res)=>{
    res.send('This is main app Content')
})


app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})