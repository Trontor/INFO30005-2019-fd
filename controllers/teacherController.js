const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

const registerTeacher = (req, res) => {
  // Check for payload errors (server-side input validation)
  const { errors, isValid } = validateRegisterInput(req.body);
  // The registration input fields is invalid
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // First, let's check if the email exists
  Teacher.findOne({ email: req.body.email }).then(teacher => {
    if (teacher) {
      // There is a teacher with the email
      return res.status(400).json({ email: "Email already exists." });
    } else {
      // There is no teacher with the email
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating (PG)
        d: "mm" // Default picture
      });
      const newTeacher = new Teacher({
        honorific: req.body.honorific,
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        school: req.body.school
      });
      // Salt and hash the password then send response back
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTeacher.password, salt, (err, hash) => {
          if (err) throw err;
          newTeacher.password = hash;
          newTeacher
            .save()
            .then(teacher => res.json(teacher))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

const teacherLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Check for payload errors (server-side input validation)
  const { errors, isValid } = validateLoginInput(req.body);
  // Find the teacher by email
  Teacher.findOne({ email }).then(teacher => {
    if (!teacher) {
      // No teacher found!
      errors.email = "Teacher not found";
      return res.status(404).json(errors);
    }
    // Teacher found successfully
    // NOTE: Password in the database is salted and hashed, so we use bcrypt to compare
    bcrypt.compare(password, teacher.password).then(isMatch => {
      if (isMatch) {
        // Payload for JWT Signing
        const payload = {
          id: teacher.id,
          name: teacher.name,
          avatar: teacher.avatar
        };
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
};

const testTeacher = (req, res) => {
  res.json({ msg: "Teachers works" });
};

const getLeaderboard = (req, res) => {
  Teacher.findById(req.params.id, async (err, teacher) => {
    if (!err) {
      let students = [];
      for (const student_id of teacher.manage) {
        const student = await Student.findById(student_id);
        students.push({
          name: student.name,
          star: student.starAward
        });
      }
      students.sort(function(a, b) {
        // descending order
        return (b.star) - (a.star);
      });
      res.json({ success: "true", lead: students });
    }
  });
};

const unlockTopics = (req, res) => {
  Teacher.findById(req.params.id, async (err, teacher) => {
    if (!err) {
      // get topic id from body
      const topic_id = req.body.id;
      for (const student_id of teacher.manage) {
        const student = await Student.findById(student_id);
        student.unlockedTopics.push(topic_id);
        student.save();
      }
      res.sendStatus(200);
    }
  });
};

module.exports.registerTeacher = registerTeacher;
module.exports.teacherLogin = teacherLogin;
module.exports.testTeacher = testTeacher;
module.exports.getLeaderboard = getLeaderboard;
module.exports.unlockTopics = unlockTopics;