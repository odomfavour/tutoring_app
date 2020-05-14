const Category = require('../models/category');
const Subject = require("../models/subject");
const User = require("../models/user");

// const Tutor = require('../models/tutor');
// const Lesson = require('../models/lesson');


// admin can get all subjects in a category
exports.getSubjects = async (req, res) => {

  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.json({ message: err });
  }
};



// admin can create subject in a category
exports.createSubject = async (req, res) => {
  const subject = new Subject();
  subject.name = req.body.name;
  subject.description = req.body.description;

  subject.save()
  Category.findByIdAndUpdate(
    { _id: req.params.categoryId },
    {
      $push: {
        subjects: subject,
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




exports.specificSubject = async (req, res) => {


  try {
    const subject = await Subject.findById(req.params.subjectId);
    res.json(subject);
  } catch (err) {
    res.json({ message: err });
  }
};


// admin can delete a subject in a category
exports.deleteSubject = async (req, res) => {

  try {
    const removedSubject = await Subject.deleteOne({
      _id: req.params.subjectId,
    });
    res.json({
      removedSubject,
      message: 'Subject has been deleted'
    });
  } catch (err) {
    res.json({ message: err });
  }
};

// admin can update a subject in a category

exports.updateSubject = async (req, res) => {

  try {
    const updatedSubject = await Subject.updateOne(
      { _id: req.params.subjectId },
      { $set: { name: req.body.name } }
    );
    res.json({
      updatedSubject,
    message: 'Subject has been updated'});
  } catch (err) {
    res.json({ message: err });
  }
};

// tutor can update a subject in a category

exports.tutorUpdateSubject = async (req, res) => {

  try {
    const updatedSubject = await Subject.updateOne(
      { _id: req.params.subjectId },
      { $set: { subject: req.body.subject } }
    );
    res.json({
      updatedSubject,
    message: 'Subject has been updated'});
  } catch (err) {
    res.json({ message: err });
  }
};

// tutor can delete a subject in a category

exports.tutorDeleteSubject = async (req, res) => {
  try {
    const removedSubject = await Subject.deleteOne({
      _id: req.params.subjectId,
    });
    res.json({
      removedSubject,
      message: "Subject has been deleted",
    });
  } catch (err) {
    res.json({ message: err });
  }
};


// tutors can register for a subject

exports.registerForSubject = async (req, res) => {
  const tutor = new User();
  tutor.name = req.body.name;
  tutor.email = req.body.email;
  tutor.role = req.body.role;
  tutor.subject = req.body.subject;


  tutor.save();
  Subject.findByIdAndUpdate(
    { _id: req.params.subjectId },
    {
      $push: {
        tutors: tutor,
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
}

// tutor can update a particular registered subject


exports.getMySubjects = async (req, res) => {
  // const { id } = req.params;

  await User.findById(req.params.userId)
    // ..and populate all of the notes associated with it
    .populate("subjects")
    .then(function (subjects) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(subjects);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

// students can see all the tutors taking a subject in a category
exports.getAllTutors = async (req, res) => {
  // const { id } = req.params;

  await Category.findById(req.params.categoryId)
    // ..and populate all of the notes associated with it
    .populate("subjects")
    .populate("tutors")
    .exec()
    .then(function (tutors) {
      // If we were able to successfully find an tutors with the given id, send it back to the client
      res.json(tutors);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};


// Admin can search for subjects in alphabetic order

exports.subject_search = async (req, res) => {

    // var query = { name };
    var mysort = { name: 1 };

    Subject.find({ }, null, function (err, subjects) { 
        res.json(subjects)
    }).sort(mysort)


};

exports.tutorGetSubject = async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const tutor = await User.findById({ _id: req.params.subjectId });
    res.json(tutor);
  } catch (err) {
    res.json({ message: err });
  }
};