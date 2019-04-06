const mongoose = require('mongoose');

const LearnerSchema = new mongoose.Schema( {
    username: {
        type: string,
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
    bio: {
        type: String
    },
    star: {
        type: Number,
        required: true
    },
    progress: {
        completed: {
            videoCount: Number,
            articleCount: Number
        },
        uncompleted: {
            videoCount: Number,
            articleCount: Number
        }
    }
});

mongoose.model('learners', LearnerSchema);