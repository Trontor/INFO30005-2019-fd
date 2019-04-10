const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema( {
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    replies: [
        {
            author: mongoose.Schema.Types.ObjectId,
            datePosted: Date,
            content: String
        }
    ]
});

module.exports = Thread = mongoose.model('threads', ThreadSchema);