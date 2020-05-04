const Category = require('../models/category');
const Subject = require('../models/subject')



exports.getSubjects = async (req, res) => {
  // res.json({
  //   categories: [
  //     { title: "Primary Section", description: "For primary school" },
  //     { title: "Junior Secondary Section", description: "For primary school" },
  //     { title: "Senior Secondary Section", description: "For primary school" },
  //   ],
  // });
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