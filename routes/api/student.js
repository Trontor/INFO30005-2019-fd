const express = require("express");
const passport = require("passport");
const router = express.Router();

// Load Student model
const controller = require("../../controllers/studentController");

// @route   GET api/student/test
// @desc    Tests post route
// @access  Public
router.get("/test", controller.testStudent);

// @route   POST api/student/register
// @desc    Register a new student
// @access  Public
router.post("/register", controller.registerStudent);

// @route   GET api/student/login
// @desc    Login Student / Return JWT Token
// @access  Public
router.post("/login", controller.studentLogin);

// @route   GET api/student/login
// @desc    Returns the current student
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.student);
  }
);
module.exports = router;
