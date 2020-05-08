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

exports.tutor_search = async (req, res) => {

    // var query = { name };
    var mysort = { firstName: -1 };

    Tutor.find({ }, null, function (err, docs) { 
        res.json(docs)
    }).sort(mysort)


};

exports.get_all_tutors = async (req, res) => {
    try {
        const tutor = await Tutor.find();
        res.json(tutor)
    } catch (err) {
        res.json({ message: err })
    }
};


exports.create_tutor = async (req, res) => {
    // const name = req.body.name;
    // const description = req.body.description;

    const tutor = new Tutor({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.description,
        lesson: req.body.lesson
    });
    try {
        const savedTutor = await tutor.save();
        res.send(savedTutor)
    } catch (err) {
        res.status(400).send(err)
    }
};

exports.get_tutor = async (req, res) => {
    // console.log(req.params.categoryId);

    try {
        const tutor = await Tutor.findById({ _id: req.params.tutorId });
        res.json(tutor);
    } catch (err) {
        res.json({ message: err });
    }
};

exports.delete_tutor = async (req, res) => {
    // console.log(req.params.categoryId);
    
        try {
            const removedtutor = await Tutor.deleteOne({ _id: req.params.tutorId });
            res.json('tutor has been deactivated');
        } catch (err) {
            res.json({ message: err });
        }
    
    
};

exports.update_tutor = async (req, res) => {
    // console.log(req.params.categoryId);

    try {
        const updatedTutor = await Tutor.updateOne({ _id: req.params.tutorId }, { $set: { firstName: req.body.firstName } });
        res.json(updatedTutor);
    } catch (err) {
        res.json({ message: err });
    }
};
