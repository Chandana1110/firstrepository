const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
        adminId : Number,
        username : String,
        password : String
    })

module.exports = mongoose.model("admins",adminSchema)