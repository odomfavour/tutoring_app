
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  subject: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  tutor_name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  tutor_email: {
    type: String,
  },
  student_name: {
    type: String,
  },
  student_email: {
    type: String,
  },
  category: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Lesson = mongoose.model("lesson", lessonSchema);

module.exports = Lesson;
