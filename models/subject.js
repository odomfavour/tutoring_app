const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    name: {
          type: String,
        required: true
    },
    decription: {
      type: String
    },
    tutors: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
); 

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject
