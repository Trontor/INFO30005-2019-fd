const mongoose = require('mongoose');
const Video = require("../models/Video");

const findVideoByTitle = (req, res) => {
    const videoTitle = req.params.title;
    Video.find({title:videoTitle}, (err, video) => {
        if (!err) {
            res.json({ title: videoTitle, stars: video.starAward });
        } else {
            res.sendStatus(404).json({title: "Cannot find video."});
        }
    });
};

module.exports.findVideoByTitle = findVideoByTitle;