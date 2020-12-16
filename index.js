var express = require('express')
var app = express();
var bookRouter = require("./router/bookrouter")
var studentRouter =require("./router/studentrouter")
var adminRouter = require("./router/adminrouter")
var mongoose = require('mongoose')
var cors = require('cors')
app.use(express.json())


app.get("/",function(request , responce){
    responce.send("Chandana First Express Demo 2")
})

app.use(cors())
app.use("/book" , bookRouter)
app.use("/student", studentRouter)
app.use("/admin", adminRouter)
//app.use("./IssuebooktostudentRouter",IssuebooktostudentRouter)
//app.use("./ViewBookListRoute", ViewBookListRoute)
//app.use("./DeleteBookRouter",DeleteBookRouter)

/* app.get("/book",function(request , responce , next){
    console.log("method 1")
    next();
    responce.send("Books Page : Get Method")
    
}) */

/* app.get("/book",function(request , responce){
    //responce.send("Books Page : Get Method 2")
    console.log("method 2")
})

app.post("/book",function(request , responce){
    console.log(request.body)
    responce.send("Books Page : Post Method")
})

app.get("/book/:name",function(request , responce){
    responce.send("Book Name: " + request.params.name)
}) */




mongoose.connect("mongodb://localhost:27017/librarydb" , () =>{console.log("Mongoose is Running now")})
app.listen(5000)