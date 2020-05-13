// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     firstName: {
//         type: String, 
//         required: true,
//         minlength: 5,
//         maxlength: 50
//     },
//     lastName: {
//         type: String, 
//         required: true,
//         minlength: 5,
//         maxlength: 50
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }, 
//     role: {
//         type: String,
//         default: 'basic',
//         enum: ["basic", "tutor", "admin"]
//     }
// }, { timestamps: true });

// module.exports = mongoose.model("User", userSchema);


// server/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  role: {
    type: String,
    default: 'student',
    enum: ["student", "tutor", "admin"]
  },
  subjects: {
    type: Array
  },
  lessons: [{
    type: Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
