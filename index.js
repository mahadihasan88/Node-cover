
const express=require('express');
const app=express();
const port =5000;
const people =require('./people');
  console.log(people[5]);

















app.get('/', (req, res) => {
    res.send('Challenge is the key to success')
  })


  app.listen(port,()=>console.log(`Mahadi Your Server Running on port ${port}`))