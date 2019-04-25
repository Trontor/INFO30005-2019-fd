const express = require("express");
const router = express.Router();

// Load Article model
const controller = require("../../controllers/articleController");

// @route   GET api/articles/:title
// @desc    Find an article by title, get star award
// @access  Public
router.get("/:title", controller.findArticleByTitle);

module.exports = router;