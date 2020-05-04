const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

var Category = mongoose.model("Category", categorySchema);


module.exports = Category;