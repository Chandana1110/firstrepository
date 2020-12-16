const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
        bookID : {
            type : Number,
            required : true
        },
        bookName : {
            type : String,
            required : true
        },
        bookAuthor : {
            type   : String,
            requied : true
        },
        bookEdition : {
            type : Number,
            required : true
        },
})
    
module.exports = mongoose.model("books",BookSchema)