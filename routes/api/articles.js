const express = require("express");
const router = express.Router();

// Load Article model
const controller = require("../../controllers/articleController");

// @route   GET api/articles/:id
// @desc    Find an article by id
// @access  Public
router.get("/:id", controller.getArticleByID);

module.exports = router;
