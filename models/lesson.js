
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    day: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    Scheduled_date: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Lesson = mongoose.model("tutor", lessonSchema);

module.exports = Lesson;
