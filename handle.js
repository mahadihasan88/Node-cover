const handle=(req,res)=>{
    res.send('Client is connected with Server')
    console.log(req.app.get('view engin'));
}
module.exports=handle;