const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    contentURL: {
        type: String,
        required: true
    },
    starAward: {
        type: Number,
        required: true
    }
});

module.exports = Video = mongoose.model('videos', VideoSchema);