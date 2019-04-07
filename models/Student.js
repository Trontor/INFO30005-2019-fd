const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema( {
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
    yearLevel: {
        type: Number
    },
    school: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    star: {
        type: Number,
        required: true
    },
    teacher: mongoose.Schema.Types.ObjectId,
    progress: {
        completed: {
            videoCount: Number,
            articleCount: Number
        },
        uncompleted: {
            videoCount: Number,
            articleCount: Number
        },
        locked: {
            videoCount: Number,
            articleCount: Number
        }
    }
});

mongoose.model('students', StudentSchema);