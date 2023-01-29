
const express=require('express');
const _=require('lodash');
const app=express();
const port =5000;
const people =require('./people');

const fs=require('fs');

fs.readFile('mahadi.txt',(err,data)=>{
    console.log(data.toString());
});
console.log("Bangladesh is small country");

 















app.get('/', (req, res) => {
    res.send('Challenge is the key to success')
  })


  app.listen(port,()=>console.log(`Mahadi Your Server Running on port ${port}`))