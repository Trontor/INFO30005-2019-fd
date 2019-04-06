const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    starAward: {
        type: Number,
        required: true
    }
});

mongoose.model('videos', VideoSchema);