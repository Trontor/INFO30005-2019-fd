const express = require("express");
const router = express.Router();

// Load Video model
const controller = require("../../controllers/videoController");

// @route   GET api/videos/:id
// @desc    Find a video by id, get star award
// @access  g
router.get("/:id", controller.getVideoByID);

module.exports = router;
