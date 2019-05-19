const express = require("express");
const passport = require("passport");
const router = express.Router();

// Load Student model
const controller = require("../../controllers/studentController");

// @route   POST api/student/register
// @desc    Register a new student
// @access  Public
router.post("/register", controller.registerStudent);

// @route   POST api/student/items/complete
// @desc    Mark item as completed for student
// @access  Private
router.post(
  "/items/complete",
  passport.authenticate("jwt", { session: false }),
  controller.completedItem
);

// @route   POST api/student/reset
// @desc    Reset Student
// @access  Public
router.post(
  "/reset",
  passport.authenticate("jwt", { session: false }),
  controller.studentReset
);

// @route   POST api/student/login
// @desc    Login Student / Return JWT Token
// @access  Public
router.post("/login", controller.studentLogin);

// @route   GET api/student/login
// @desc    Returns the current student's profile
// @access  Private
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  controller.studentProfile
);

module.exports = router;
