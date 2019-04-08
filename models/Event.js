const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema( {
    title: {
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
    description: {
        type: String,
        required: true
    },
    organiser: {
        type: String
    },
    location: String,
    coordinate: {
        lat: mongoose.Schema.Types.Decimal128,
        long: mongoose.Schema.Types.Decimal128
    },
    participant: [mongoose.Schema.Types.ObjectId]
});

module.exports = Event = mongoose.model('events', EventSchema);