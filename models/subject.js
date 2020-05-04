const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    name: {
          type: String,
        required: true
    },
    decription: {
        type: String,
        required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    tutors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tutor",
      },
    ],
  },
  { timestamps: true }
);

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject
