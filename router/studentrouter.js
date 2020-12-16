//Import Express , Router and all DatabaseSchema(model)
var express = require('express')
var router = express.Router()
var student = require('../model/student')
//
const getStudent = async (request , responce) => {
    console.log("Student Information")
    const data = await Student.find()
    responce.json(data)
};

const addStudent = async (request , responce) => {
    console.log("Add Student")

        const newStudent = new Student({
            StudentID : request.body.StudentId,
            StudentName : request.body.StudentName
        })
    const data = await newStudent.save()
    responce.json(data)
    
};

router.route("/").get(getStudent)
router.route("/addStudent").post(addStudent)


module.exports = router ;