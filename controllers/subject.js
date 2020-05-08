const Category = require('../models/category');
const Subject = require('../models/subject');

// const Tutor = require('../models/tutor');
// const Lesson = require('../models/lesson');



exports.getSubjects = async (req, res) => {

  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.json({ message: err });
  }
};

// exports.createSubject = (req, res) => {
//   const subject = new Subject({
//     name: req.body.name,
//     description: req.body.description,
//   });
//   category
//     .save()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => res.json({ message: err }));
// };

exports.createSubject = async (req, res) => {
  const subject = new Subject();
  subject.name = req.body.name;
  subject.description = req.body.description;

  subject.save()
    .then((result) => {
      Category.findOne({ _id: subject._id }, (err, category) => {
        if (category) {
          // The below two lines will add the newly saved review's 
          // ObjectID to the the User's reviews array field
          category.subjects.push(subject);
          category.save();
          res.json({ message: 'Subject created!' });
        }
      });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.subjectByCategory = async (req, res) => {


  const { id } = req.params;

  const category = await Category.findById(id).populate("subjects");
  res.send(category.subjects);
};

exports.specificSubject = async (req, res) => {


  try {
    const subject = await Subject.findById(req.params.subjectId);
    res.json(subject);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.deleteSubject = async (req, res) => {

  try {
    const removedSubject = await Subject.deleteOne({
      _id: req.params.subjectId,
    });
    res.json(removedSubject);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.updateSubject = async (req, res) => {

  try {
    const updatedSubject = await Subject.updateOne(
      { _id: req.params.subjectId },
      { $set: { name: req.body.name } }
    );
    res.json(updatedSubject);
  } catch (err) {
    res.json({ message: err });
  }
};

