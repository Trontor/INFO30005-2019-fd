const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    default: new Date()
  },
  content: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  teacherID: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  authorID: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  replies: [
    {
      authorID: {
        type: mongoose.Types.ObjectId,
        required: true
      },
      datePosted: {
        type: Date,
        default: new Date()
      },
      content: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Thread = mongoose.model("threads", ThreadSchema);
