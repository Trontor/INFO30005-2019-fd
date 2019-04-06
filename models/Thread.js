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
            index: Number,
            author: mongoose.Schema.Types.ObjectId,
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

mongoose.model('threads', ThreadSchema);