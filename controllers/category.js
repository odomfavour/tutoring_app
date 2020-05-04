const Category = require('../models/category');

const Subject = require('../models/subject')

exports.categories = async (req, res) => {
    // res.json({
    //   categories: [
    //     { title: "Primary Section", description: "For primary school" },
    //     { title: "Junior Secondary Section", description: "For primary school" },
    //     { title: "Senior Secondary Section", description: "For primary school" },
    //   ],
    // });
    try {
        const category = await Category.find();
        res.json(category)
    } catch (err) {
        res.json({ message: err })
    }
};

exports.createSubject = async (req, res) => {
  console.log(req.params);
  category = req.params;
  id = category.id;
  const { subjectName, subjectDesc } = req.body;

  let subject = new Subject({
    subjectName,
    subjectDesc,
  });
  await subject.save();

  const categoryById = await Subject.findById(id);
  categoryById.subjects.push(subject);
  return res.send(categoryById);
  // try {
  //     subject.save();
  //      res
  //        .status(200)
  //        .send({ status: true, message: "Subject created successfully" });
  // }
  // catch (err) {
  //     res.json({ message: err })
  // }
};

exports.subjectByCategory = async (req, res) => {
//     const subject = new Subject({
//         name: req.body.name,
//         description: req.body.description

//     });

//     try {
       
//         const savedSubject = await subject.save();
//         const updated = Category.findOneAndUpdate({ _id: req.params.id }, { subjects: subject._id }, {
//   new: true
// });
//         res.status(200).send(updated)
//     } catch (err) {
//         res.send(err)
//     }
    
    const { id } = req.params;

    const category = await Category.findById(id).populate('subjects');
    res.send(category.subjects)
}

exports.oneCategory = async (req, res) => {
    // const name = req.body.name;
    // const description = req.body.description;
    const category = new Category({
      name: req.body.name,
        description: req.body.description
    });
   try {
        const savedCategory = await category.save();
        res.send(savedCategory)
    } catch (err) {
        res.status(400).send(err)
  }
};

exports.specificCategory = async (req, res) => {
    // console.log(req.params.categoryId);
    
    try {
        const category = await Category.findById(req.params.categoryId);
        res.json(category);
    } catch (err) {
        res.json({ message: err });
    }
};

exports.deleteCategory =  async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const removedCategory = await Category.remove({_id: req.params.categoryId});
    res.json(removedCategory);
  } catch (err) {
    res.json({ message: err });
  }
};
    
exports.updateCategory = async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const updatedCategory = await Category.updateOne({_id: req.params.categoryId}, { $set: {name: req.body.name} || {description: req.body.description}});
    res.json(updatedCategory);
  } catch (err) {
    res.json({ message: err });
  }
};