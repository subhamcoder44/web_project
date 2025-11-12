const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      trim: true,
      seclect: false,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    image: {
      type: String,
      // required: true,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
    courseProgress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
