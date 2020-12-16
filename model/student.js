const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
        studentID : Number,
        name :  String,
        age : Number ,
        gender : String ,
        phone : Number ,
        email : String
    })

module.exports = mongoose.model("students",studentSchema)