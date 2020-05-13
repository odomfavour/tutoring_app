const Category = require('../models/category');

const Subject = require('../models/subject')
const User = require('../models/user')

exports.subjectByCategory = async (req, res) => {
  // const { id } = req.params;

  await Category.findById(req.params.categoryId)
    // ..and populate all of the notes associated with it
    .populate("subjects")
    .then(function (category) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(category);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};
exports.categories = async (req, res) => {
  // console.log(req.user);
    try {
      const category = await Category.find();
      // console.log(req.user.role)
        res.json(category)
    } catch (err) {
        res.json({ message: err })
    }
};
exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.json({ message: err })
    }
};


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
exports.oneUser = async (req, res) => {
    // console.log(req.params.categoryId);
    
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
};

exports.delUser =  async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const removedUser = await User.remove({_id: req.params.userId});
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
};
exports.deleteCategory =  async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const removedCategory = await Category.deleteOne({_id: req.params.categoryId});
    res.json({
      removedCategory,
    message: "This category has been deleted"});
  } catch (err) {
    res.json({ message: err });
  }
};
    
exports.updateCategory = async (req, res) => {
  // console.log(req.params.categoryId);

  try {
    const updatedCategory = await Category.updateOne({_id: req.params.categoryId}, { $set: {name: req.body.name} || {description: req.body.description}});
    res.json({
      updatedCategory,
    message: 'This category has been updated'});
  } catch (err) {
    res.json({ message: err });
  }
};

