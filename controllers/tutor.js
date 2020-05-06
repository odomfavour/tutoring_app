const Tutor = require('../models/tutor');
const Lesson = require('../models/lesson');
const User = require('../models/user')

exports.createLesson = async (req, res) => {

    // const { name, description } = req.body;
    const lesson = new Lesson({
        time: req.body.time,
        scheduled_date: req.body.scheduled_date,
        students: req.body.students
    });



    lesson.save().then(result => {
        console.log(result);
        res.send(result)
    }).catch(err => {
        res.send(err)
    })

    
};


// tutors can register for lesson

exports.tutor_register = async (req, res) => {

    // const { name, description } = req.body;
    const tutor = new Tutor({
        firstName: req.body.name,
        LastName: req.body.description,
        email: req.body.email
    });


    tutor.save().then(result => {
        console.log(result);
        res.send(result)
    }).catch(err => {
        res.send(err)
    })


};