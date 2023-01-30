const handle=(req,res)=>{
    res.send('Client is connected with Server')
    console.log(req.app.locals.Title);
}
module.exports=handle;