import express from 'express'
const PORT=3000;
const app=express();

app. listen(PORT,()=>
console.log("server is rurning"))



// var express = require("express");
// var app = express();
// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });

// app.get("/url", (req, res, next) => {
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//    });

app.get('/',(request,response)=>
{
    response.send('Welcome to my special Api')
})