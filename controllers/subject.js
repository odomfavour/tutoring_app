const Category = require('../models/category');
const Subject = require('../models/subject');

const Tutor = require('../models/tutor');
const Lesson = require('../models/lesson');



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

  const subject = new Subject({
    name: req.body.name,
    description: req.body.description
  });
  try {
    const savedCategory = await subject.save();
    // const update = Category.findOneAndUpdate({ _id: req.params.id }, { $push: { subjects: subject._id } }, { new: true });
    res.send(savedCategory)
    
    
  } catch (err) {
    res.status(400).send(err)
  }
};

exports.subjectByCategory = async (req, res) => {
 

  const { id } = req.params;

  const category = await Category.findById(id).populate("subjects");
  res.send(category.subjects);
};

exports.specificSubject = async (req, res) => {
 

  try {
    const subject = await Subject.findById(req.params.subjectId);
    res.json(category);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.deleteSubject = async (req, res) => {

  try {
    const removedSubject = await Subject.remove({
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

// get products with id populated
// app.get("/products/:id", function (req, res) {
//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//   db.Product.findOne({ _id: req.params.id })
//     // ..and populate all of the notes associated with it
//     .populate("reviews")
//     .then(function (dbProduct) {
//       // If we were able to successfully find an Product with the given id, send it back to the client
//       res.json(dbProduct);
//     })
//     .catch(function (err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });