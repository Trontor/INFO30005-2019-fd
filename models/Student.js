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
            videoList: [mongoose.Schema.Types.ObjectId],
            articleList: [mongoose.Schema.Types.ObjectId]
        },
        uncompleted: {
            videoList: [mongoose.Schema.Types.ObjectId],
            articleList: [mongoose.Schema.Types.ObjectId]
        }
    }
});

module.exports = Student = mongoose.model('students', StudentSchema);