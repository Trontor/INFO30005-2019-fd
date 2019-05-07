const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Thread model
const controller = require("../../controllers/threadController");

// @route   POST api/threads/create
// @desc    Create a thread
// @access  Public
router.get("/test", (req, res) => res.send("test"));

// @route   POST api/threads/
// @desc    Create a thread
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.createThread
);

// // @route   GET api/threads/:title
// // @desc    Find a thread by title
// // @access  Public
// router.get("/:title", controller.findThreadByTitle);

// // @route   GET api/threads/:author
// // @desc    Find threads by an author
// // @access  Public
// router.get("/:author", controller.findThreadsByAuthor);

// @route   PATCH api/threads/:id
// @desc    Add reply to thread. Reply author + content is passed in body
// @access  Public
router.patch("/:id", controller.addReply);

// @route   DELETE api/threads/:id
// @desc    Delete thread by thread id
// @access  Public
router.delete("/:id", controller.deleteThread);

module.exports = router;
