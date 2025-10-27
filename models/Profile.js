const mongoose = require("mongoose");
const profileShema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    trim: true,
  },
});
const profile = mongoose.model("profile", profileShema);
module.exports = profile;
