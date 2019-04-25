const express = require("express");
const router = express.Router();

// Load Video model
const controller = require("../../controllers/videoController");

// @route   GET api/videos/:title
// @desc    Find a video by title, get star award
// @access  Public
router.get("/:title", controller.findVideoByTitle);

module.exports = router;