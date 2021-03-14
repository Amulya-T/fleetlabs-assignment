const express=require("express");

const app=express();

const port=8080;

const appRouter = require('./Router/router')

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
  next();
});

app.use('/', appRouter)


app.listen(port,()=>
     {
         console.log("server is running on "+port);
        
       })
   
       
    

  

    
       
  
        
    
