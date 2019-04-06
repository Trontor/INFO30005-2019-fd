const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema( {
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
    featuredImage: {
        type: String
    },
    content: {
        type: String
    },
    starAward: {
        type: Number,
        required: true
    }
});

mongoose.model('articles', ArticleSchema);