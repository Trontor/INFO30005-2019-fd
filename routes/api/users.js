const express = require("express");
const passport = require("passport");
const router = express.Router();

// Load User model
const controller = require("../../controllers/userController");

// @route   GET api/users/test
// @desc    Tests post route
// @access  Public
router.get("/test", controller.testUser);

// @route   POST api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", controller.registerUser);

// @route   GET api/users/login
// @desc    Login User / Return JWT Token
// @access  Public
router.post("/login", controller.userLogin);

// @route   GET api/users/login
// @desc    Returns the current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
module.exports = router;
