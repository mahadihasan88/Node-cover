const express=require('express');

const app=express();
app.use(express.static(`${__dirname}/public`,{
    index:"page.txt"
}));

app.get('/',(req,res)=>{
    res.send('Client is connected with Server')
})
app.post('/university',(req,res)=>{
    console.log(req.body.name);
    res.send('Data is Send to the Server');
})
app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})