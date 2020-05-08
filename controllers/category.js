const Category = require('../models/category');

const Subject = require('../models/subject')
const User = require('../models/user')

exports.categories = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category)
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

