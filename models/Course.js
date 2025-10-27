const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  whatWeLearn: {
    type: String,
    required: true,
  },
  courseContent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "section",
  },
  studentEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  thumbnail: {
    type: String,
    required: true,
  },
  tags: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tags",
  },
  RatinAndReviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RatinAndReviews",
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
