//Import Express , Router and all DatabaseSchema(model)
var express = require('express')
var router = express.Router()
var books = require('../model/book')

const getBooks = async (request , responce) => {
    console.log("Books Information")
    const data = await books.find()
    responce.json(data)
};

const addBook = async (request , responce) => {
    console.log("Add Book")
    const newBook = new books({
        bookID : request.body.bookID,
        bookName : request.body.bookName,
        bookAuthor : request.body.bookAuthor,
        bookEdition : request.body.bookEdition
    })
    const data = await newBook.save()
    responce.json(data)
    
};

router.route("/").get(getBooks)
router.route("/addBook").post(addBook) //localhost:5000/books/addBook


module.exports = router ;