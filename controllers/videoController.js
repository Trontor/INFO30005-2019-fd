const mongoose = require("mongoose");
const Video = require("../models/Video");

const findVideoByTitle = (req, res) => {
  const videoTitle = req.params.title;
  Video.find({ title: videoTitle }, (err, video) => {
    if (!err) {
      res.json({ title: videoTitle, stars: video.starAward });
    } else {
      res.sendStatus(404).json({ title: "Cannot find video." });
    }
  });
};

const getVideoByID = (req, res) => {
  Video.findById(req.params.id, (err, video) => {
    if (!err) {
      res.json({
        title: video.title,
        description: video.description,
        contentURL: video.contentURL,
        starAward: video.starAward
      });
    }
  });
};

module.exports.getVideoByID = getVideoByID;
