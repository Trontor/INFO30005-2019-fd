const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");
const router = express.Router();

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

// @route   POST api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", (req, res) => {
  // Check for payload errors (server-side input validation)
  const { errors, isValid } = validateRegisterInput(req.body);
  // The registration input fields is invalid
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // First, let's check if the email exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // There is a user with the email
      return res.status(400).json({ email: "Email already exists." });
    } else {
      // There is no user with the email
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating (PG)
        d: "mm" // Default picture
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      // Salt and hash the password then send response back
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Return JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Check for payload errors (server-side input validation)
  const { errors, isValid } = validateLoginInput(req.body);
  // Find the user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      // No user found!
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    // User found successfully
    // NOTE: Password in the database is salted and hashed, so we use bcrypt to compare
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // Payload for JWT Signing
        const payload = { id: user.id, name: user.name, avatar: user.avatar };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: "7d" },
          (err, token) => {
            res.json({ success: "true", token: "Bearer " + token });
          }
        );
      } else {
        errors.password = "Password incorrect :(";
        return res.status(400).json(errors);
      }
    });
  });
});

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