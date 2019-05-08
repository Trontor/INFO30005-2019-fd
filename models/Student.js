const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  teacherID: {
    type: mongoose.Schema.Types.ObjectId,
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
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: new Date()
  },
  yearLevel: {
    type: Number
  },
  bio: {
    type: String
  },
  stars: {
    type: Number,
    default: 0
  },
  completed: [mongoose.Schema.Types.ObjectId]
  //   {
  //     // topic: mongoose.Schema.Types.ObjectId,
  //     // videoListIDs: [mongoose.Schema.Types.ObjectId],
  //     // articleListIDs: [mongoose.Schema.Types.ObjectId],
  //     // quizListIDs: [mongoose.Schema.Types.ObjectId]
  //   }
  // ]
});

module.exports = Student = mongoose.model("students", StudentSchema);
