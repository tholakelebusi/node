import express from 'express'
import bodyParser from 'body-parser'
const PORT=3000;
const app=express();

app. listen(PORT,()=>
console.log("server is rurning"))

let bookList=[
    "Power of Mind",
    "The secret",
    "The Secreate daughter"
]

//to indicate to express u will use body parse
app.use(bodyParser.urlencoded({ extended: true }))

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

app.get('/books',(request,response)=>
{
    return response.json({allBooks:bookList})
})

app.post('/books',(request,response)=>
{
    const bookName= request.body.name;

if(bookList.includes(bookName))
return response.json({success:false})
bookList.push(bookName)

return response.json({success:true})
})


app.delete('./books',(request,response)=>
{
    const bookToDeELETE=request.body.name
    bookList=bookList.filter((book)=>book!==bookToDeELETE)

    return response.json({allBooks:bookList})
})

app.put('/books', (request, response) => {
    
    const bookToUpdate = request.body.nameToUpdate
    const updatedBook = request.body.updatedName
  
   
    const indexOfBookToUpdate = bookList.findIndex(
      (book) => book === bookToUpdate
    )
  
  
    if (indexOfBookToUpdate === -1) return response.json({ success: false })
  
   
    bookList[indexOfBookToUpdate] = updatedBook
    return response.json({ success: true })
  })