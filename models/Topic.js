const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  items: [
    {
      type: { type: String, required: true },
      itemID: { type: mongoose.Schema.Types.ObjectId, required: true }
    }
  ]
});

module.exports = Topic = mongoose.model("topics", TopicSchema);
