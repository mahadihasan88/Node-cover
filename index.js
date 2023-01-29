const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.write('Welcome to Node World')
    res.end();
    }
    else if(req.url=='/mahadi'){
        res.write('Mahadi you have to a industrious Person in real life');
        res.end();
    }
    else{
        res.write('Page Not Found');
        res.end();
    }
});


server.listen(4000,()=>{
    console.log("Server is Running on port 4000");

})