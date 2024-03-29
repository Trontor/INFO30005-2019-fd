const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Thread = require("../models/Thread");
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

const teacherProfile = async (req, res) => {
  const {
    id,
    honorific,
    name,
    email,
    avatar,
    unlockedTopics,
    school
  } = req.user;
  const relevantThreads = await Thread.find({ teacherID: id });
  const userThreads = [];
  for (const thread of relevantThreads) {
    const postUser = await Student.findById(thread.authorID);
    userThreads.push({
      id: thread._id,
      authorID: thread.authorID,
      authorName: postUser.name,
      date: thread.datePosted,
      title: thread.title,
      topic: thread.topic,
      replies: thread.replies.length
    });
  }
  const leaderboard = await getLeaderboard(id);
  res.send({
    honorific,
    name,
    email,
    avatar,
    unlockedTopics,
    school,
    threads: userThreads,
    leaderboard
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
          honorific: teacher.honorific,
          name: teacher.name,
          avatar: teacher.avatar,
          school: teacher.school,
          unlockedTopics: teacher.unlockedTopics
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

const getLeaderboard = async teacherID => {
  const teacher = await Teacher.findById(teacherID);
  if (!teacher) {
    return null;
  }
  let students = [];
  const studentDocs = await Student.find({ teacherID });
  for (const student of studentDocs) {
    students.push({
      id: student._id,
      name: student.name,
      stars: student.stars,
      email: student.email,
      completed: student.completed.length
    });
  }
  students.sort((a, b) => b.stars - a.stars);
  return students;
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

module.exports.teacherProfile = teacherProfile;
module.exports.registerTeacher = registerTeacher;
module.exports.teacherLogin = teacherLogin;
module.exports.testTeacher = testTeacher;
module.exports.getLeaderboard = getLeaderboard;
module.exports.unlockTopics = unlockTopics;
