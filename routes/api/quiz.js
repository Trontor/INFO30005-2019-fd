const express = require("express");
const router = express.Router();

// Load Quiz model
const controller = require("../../controllers/quizController");

// @route   GET api/quiz/:id
// @desc    Get all quiz information by id
// @access  Public
router.get("/:title", controller.findQuizByTitle);

module.exports = router;