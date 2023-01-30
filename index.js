const express=require('express');

const app=express();
const router=express.Router();

app.use(express.text());
app.use(router);
router.get('/',(req,res)=>{
    res.send('Client is connected with Server')
})
router.post('/university',(req,res)=>{
    console.log(req.body);
    res.send('Data is Send to the Server');
})
app.listen(5000,()=>{
    console.log("The Server is Running on port 5000");
})