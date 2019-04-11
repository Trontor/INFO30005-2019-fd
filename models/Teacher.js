const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  honorific: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: new Date()
  },
  manage: [mongoose.Schema.Types.ObjectId]
});

module.exports = Teacher = mongoose.model("teachers", TeacherSchema);
