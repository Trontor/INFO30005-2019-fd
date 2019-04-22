const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  optionA: {
    type: String,
    required: true
  },
  optionB: {
    type: String,
    required: true
  },
  optionC: {
    type: String,
    required: true
  },
  optionD: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  starAward: {
    type: Number,
    required: true
  }
});

module.exports = Quiz = mongoose.model("quiz", QuizSchema);
