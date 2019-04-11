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
module.exports = router;
