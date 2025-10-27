const mongoose = require("mongoose");
const CourseProgressSchema = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  videocompleted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subsection",
    },
  ],
});
const CourseProgress = mongoose.model("CourseProgress", CourseProgressSchema);
module.exports = CourseProgress;
