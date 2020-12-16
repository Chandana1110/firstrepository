//Import Express , Router and all DatabaseSchema(model)
var express = require('express')
var router = express.Router()
var admin = require('../model/admin')
//
const getadmin = async (request , responce) => {
    console.log("Student Information")
    const data = await admin.find()
    responce.json(data)
};

const addadmin = async (request , responce) => {
    console.log("Add admin")

        const newadmin = new admin({
            adminID : request.body.adminId,
            adminName : request.body.adminName
        })
    const data = await newadmin.save()
    responce.json(data)
    
};

router.route("/").get(getadmin)
router.route("/addadmin").post(addadmin)


module.exports = router ;