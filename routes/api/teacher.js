const express = require("express");
const passport = require("passport");
const router = express.Router();

// Load Teacher model
const controller = require("../../controllers/teacherController");

// @route   GET api/teacher/test
// @desc    Tests post route
// @access  Public
router.get("/test", controller.testTeacher);

// @route   POST api/teacher/register
// @desc    Register a new teacher
// @access  Public
router.post("/register", controller.registerTeacher);

// @route   GET api/teacher/login
// @desc    Login Teacher / Return JWT Token
// @access  Public
router.post("/login", controller.teacherLogin);

// @route   GET api/teacher/login
// @desc    Returns the current teacher
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.teacher);
  }
);

// @route   GET api/teacher/:id/leaderboard
// @desc    Returns the student leaderboard
// @access  Private
router.get(
    "/:id/leaderboard",
    passport.authenticate("jwt", { session: false }),
    controller.getLeaderboard
);

// @route   POST api/teacher/:id/topics
// @desc    Unlock a topic, body {id: topic_id}
// @access  Private
router.post(
    "/:id/topics",
    passport.authenticate("jwt", { session: false }),
    controller.unlockTopics
);

module.exports = router;
