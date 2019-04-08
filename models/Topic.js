const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    items: [
        {
            type: String,
            itemID: mongoose.Schema.Types.ObjectId
        }
    ]
});

module.exports = Topic = mongoose.model('topics', TopicSchema);