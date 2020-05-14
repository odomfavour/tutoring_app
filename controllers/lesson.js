// const Tutor = require('../models/tutor');
const Lesson = require('../models/lesson');
const User = require('../models/user')

// admin or student can book a lesson

exports.createLesson = async (req, res) => {

    const { subject, tutor_name, tutor_email, student_name, student_email, category } = req.body;
    const lesson = new Lesson({
        student_name,
        tutor_name,
        subject,
        tutor_email,
      student_email,
        category
    });
    lesson.save();

    User.findByIdAndUpdate(
    { _id: req.params.userId },
    {
      $push: {
        lessons: lesson,
      },
    },
    { new: true, useFindAndModify: false },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );

    
};

// admin can get a lesson by id
exports.get_lesson = async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const lesson = await Lesson.findById({ _id: req.params.lessonId });
    res.json(lesson);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.delete_lesson = async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const removedLesson = await Lesson.deleteOne({ _id: req.params.lessonId });
      res.json({
          removedLesson,
          message: "Lesson deleted"
      });
  } catch (err) {
    res.json({ message: err });
  }
};


// admin can get all lessons
exports.get_all_lessons = async (req, res) => {
  
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.json({ message: err });
  }
};

// Admin can search for tutors in alphabetic order

exports.tutor_search = async (req, res) => {

    // var query = { name };
    var mysort = { name: 1 };

    const query = { role: "tutor" };
    try {
      const tutors = await User.find(query).sort(mysort);
      res.json(tutors);
    } catch (err) {
      res.json({ message: err });
    }


};

exports.get_all_tutors = async (req, res) => {
    const query = {role: 'tutor'}
    try {
        const tutors = await User.find(query);
        res.json(tutors)
    } catch (err) {
        res.json({ message: err })
    }
};




// admin can get tutor by id

exports.get_tutor = async (req, res) => {
    // console.log(req.params.categoryId);

    try {
        const tutor = await User.findById({ _id: req.params.tutorId });
        res.json(tutor);
    } catch (err) {
        res.json({ message: err });
    }
};

exports.delete_tutor = async (req, res) => {
    // console.log(req.params.categoryId);
    
        try {
            const removedtutor = await User.deleteOne({ _id: req.params.tutorId });
          res.json({
            removedtutor,
            message:'tutor has been deactivated'});
        } catch (err) {
            res.json({ message: err });
        }
    
    
};

exports.update_tutor = async (req, res) => {
    // console.log(req.params.categoryId);

    try {
        const updatedTutor = await User.updateOne({ _id: req.params.tutorId }, { $set: { role: req.body.role } });
        res.json(updatedTutor);
    } catch (err) {
        res.json({ message: err });
    }
};
