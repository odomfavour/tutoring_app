const Category = require('../models/category');

const Subject = require('../models/subject')
const User = require('../models/user')

exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.json({ message: err })
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


//delete a user
exports.delUser = async (req, res) => {
    // console.log(req.params.categoryId);

    try {
        const removedUser = await User.remove({ _id: req.params.userId });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
};




// update a user

exports.updateUser = async (req, res) => {
    // console.log(req.params.categoryId);

    try {
        const updatedUser = await User.updateOne({ _id: req.params.userId }, { $set: { name: req.body.name } });
        res.json({
            updatedUser,
            message: 'This user has been updated'
        });
    } catch (err) {
        res.json({ message: err });
    }
};