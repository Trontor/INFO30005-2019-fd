const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema( {
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
    school: {
        type: String,
        required: true
    },
    manage: [mongoose.Schema.Types.ObjectId]
});

module.exports = Teacher = mongoose.model('teachers', TeacherSchema);