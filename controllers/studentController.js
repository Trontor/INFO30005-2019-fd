const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Topic = require("../models/Topic");
const Video = require("../models/Video");
const Article = require("../models/Article");
const Quiz = require("../models/Quiz");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

const registerStudent = (req, res) => {
  // Check for payload errors (server-side input validation)
  const { errors, isValid } = validateRegisterInput(req.body);
  // The registration input fields is invalid
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // First, let's check if the linked ObjectID teacher exists
  Teacher.findById(req.body.teacherID).then(teacher => {
    console.log(teacher);
    if (!teacher) {
      // There is no teacher to link the student to
      return res.status(400).json({ teacher: "Teacher doesn't exist." });
    }
    // Second, let's check if the email exists
    Student.findOne({ email: req.body.email }).then(student => {
      if (student) {
        // There is a student with the email
        return res.status(400).json({ email: "Email already exists." });
      } else {
        // There is no student with the email
        const avatar = gravatar.url(req.body.email, {
          s: "200", // Size
          r: "pg", // Rating (PG)
          d: "mm" // Default picture
        });
        const newStudent = new Student({
          teacherID: teacher._id,
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
        // Salt and hash the password then send response back
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if (err) throw err;
            newStudent.password = hash;
            newStudent
              .save()
              .then(student => res.json(student))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
};

const studentLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Check for payload errors (server-side input validation)
  const { errors, isValid } = validateLoginInput(req.body);
  // Find the student by email
  Student.findOne({ email }).then(student => {
    if (!student) {
      // No student found!
      errors.email = "Student not found";
      return res.status(404).json(errors);
    }
    // Student found successfully
    // NOTE: Password in the database is salted and hashed, so we use bcrypt to compare
    bcrypt.compare(password, student.password).then(isMatch => {
      if (isMatch) {
        // Payload for JWT Signing
        const payload = {
          id: student.id,
          name: student.name,
          avatar: student.avatar
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

const testStudent = (req, res) => {
  res.json({ msg: "Students works" });
};

const studentProfile = (req, res) => {
  // get all info as shown in schema
  // change ObjectId to name
  const user = req.user;
  Teacher.findById(user.teacherID).then(teacher => {
    if (!teacher) {
      // There is no teacher to link the student to
      return res.status(400).send("Error: Teacher doesn't exist.");
    }
    // progress: unlocked contents
    let unlocked = [];
    const topics = teacher.unlockedTopics;
    for (let i = 0; i < topics.length; i++) {
      Topic.findById(topics[i]).then(topic => {
        if (!topic) {
          return res.status(400).send("Error: Topic doesn't exist.");
        }
        let vidList = [], artiList = [], quizList = [];
        for (let j = 0; j < topic.items.length; j++) {
          if (topic[j].type === "Article") {
            Article.findById(topic[j].itemID).then(article => {
              artiList.push(article.title);
            });
          } else if (topic[j].type === "Video") {
            Video.findById(topic[j].itemID).then(video => {
              vidList.push(video.title);
            });
          } else {
            Quiz.findById(topic[j].itemID).then(quiz => {
              quizList.push(quiz.title);
            });
          }
        }
        unlocked.push({
          topicName: topic.name,
          videoNames: vidList,
          articleNames: artiList,
          quizNames: quizList
        });
      });
    }
    // progress: completed
    let completed = [];
    const compl = user.progress;
    for (let i = 0; i < compl.length; i++) {
      Topic.findById(compl[i].topic).then(topic => {
        if (!topic) {
          return res.status(400).send("Error: Topic doesn't exist.");
        }
        let vidList = [], artiList = [], quizList = [];
        for (let j = 0; j < compl[i].videoListIDs.length; j++) {
          Video.findById(compl[i].videoListIDs[j]).then(video => {
            vidList.push(video.title);
          });
        }
        for (let j = 0; j < compl[i].articleListIDs.length; j++) {
          Article.findById(compl[i].articleListIDs[j]).then(article => {
            artiList.push(article.title);
          });
        }
        for (let j = 0; j < compl[i].quizListIDs.length; j++) {
          Quiz.findById(compl[i].quizListIDs[j]).then(quiz => {
            quizList.push(quiz.title);
          });
        }
        completed.push({
          topicName: topic.name,
          videoNames: vidList,
          articleNames: artiList,
          quizNames: quizList
        });
      });
    }

    // return all
    res.json({
      name: user.name,
      teacherHonor: teacher.honorific,
      teacherName: teacher.name,
      email: user.email,
      password: user.password,
      avatar: user.avatar,
      year: user.yearLevel,
      school: teacher.school,
      bio: user.bio,
      stars: user.stars,
      unlockedTopics: unlocked,
      progress: completed
    })
  });
};

module.exports.registerStudent = registerStudent;
module.exports.studentLogin = studentLogin;
module.exports.testStudent = testStudent;
module.exports.studentProfile = studentProfile;