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
const { getLeaderboard } = require("./teacherController");

const registerStudent = (req, res) => {
  // Check for payload errors (server-side input validation)
  const { errors, isValid } = validateRegisterInput(req.body);
  // The registration input fields is invalid
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // First, let's check if the linked ObjectID teacher exists
  // const teacherID = req.body.teacherID;
  const teacherID = "5cae9845f45af429f8e9eb17";
  Teacher.findById(teacherID).then(teacher => {
    console.log(teacher);
    //test
    if (!teacher) {
      // There is no teacher to link the student to
      return res.status(400).json({
        teacher: "Teacher doesn't exist."
      });
    }
    // Second, let's check if the email exists
    Student.findOne({
      email: req.body.email
    }).then(student => {
      if (student) {
        // There is a student with the email
        return res.status(400).json({
          email: "Email already exists."
        });
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
  Student.findOne({
    email
  }).then(student => {
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
          {
            expiresIn: "7d"
          },
          (err, token) => {
            res.json({
              success: "true",
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect :(";
        return res.status(400).json(errors);
      }
    });
  });
};

const studentReset = async (req, res) => {
  const student = await Student.findById(req.body.id);
  student.stars = 0;
  student.completed = [];
  student.save((err, student) => {
    if (err) {
      res.send(err);
    }
    res.send("Success!");
  });
};

const studentProfile = async (req, res) => {
  // get all info as shown in schema
  // change ObjectId to name
  const { teacherID, name, email, avatar, yearLevel, stars, completed } = req.user;
  const teacher = await Teacher.findById(teacherID);
  if (!teacher) {
    // The teacherID does not exist
    return res.status(400).send({
      teacher: "Teacher doesn't exist."
    });
  }
  let topics = [];
  for (const topicID of teacher.unlockedTopics) {
    const topic = await Topic.findById(topicID);
    let items = [];
    if (!topic) {
      // We don't want to send an error back for a missing topic, just skip over it
      // TODO: Handle missing topics (probably on teacher log-in)
      return;
    }
    for (const item of topic.items) {
      const { type, itemID } = item;
      let itemInfo = undefined;
      switch (type) {
        case "Article":
          itemInfo = await Article.findById(itemID);
          if (itemInfo) {
            // We don't want to send an error back for a missing item, just skip over it
            // TODO: Handle missing items (probably on administrator log-in)
            items.push({
              type,
              title: itemInfo.title,
              starAward: itemInfo.starAward,
              itemID: itemInfo._id
            });
          }
          break;
        case "Video":
          itemInfo = await Video.findById(itemID);
          if (itemInfo) {
            // We don't want to send an error back for a missing item, just skip over it
            // TODO: Handle missing items (probably on administrator log-in)
            items.push({
              type,
              title: itemInfo.title,
              starAward: itemInfo.starAward,
              itemID: itemInfo._id
            });
          }
          break;
        case "Quiz":
          itemInfo = await Quiz.findById(itemID);
          if (itemInfo) {
            // We don't want to send an error back for a missing item, just skip over it
            // TODO: Handle missing items (probably on administrator log-in)
            items.push({
              type,
              title: itemInfo.title,
              starAward: itemInfo.starAward,
              itemID: itemInfo._id
            });
          }
          break;
      }
    }
    topics.push({
      name: topic.name,
      items
    });
  }
  const relevantThreads = await Thread.find({
    teacherID: req.user.teacherID
  });
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
  const leaderboard = await getLeaderboard(teacherID);
  res.json({
    // Teacher attributes
    teacherHonor: teacher.honorific,
    teacherName: teacher.name,
    school: teacher.school,
    // User attributes
    name,
    email,
    avatar,
    yearLevel,
    stars,
    threads: userThreads,
    topics,
    leaderboard,
    completed
    // progress: completed
  });
};

const completedItem = (req, res) => {
  const completedID = req.body.id;
  Student.findById(req.user.id, async (err, student) => {
    if (err) {
      res.status(400).json(err);
    }
    let relevantItem = await Quiz.findById(completedID);
    if (!relevantItem) {
      relevantItem = await Article.findById(completedID);
      if (!relevantItem) {
        relevantItem = await Video.findById(completedID);
      }
    }
    if (!student.completed.includes(completedID)) {
      student.completed.push(completedID);
      student.stars += relevantItem.starAward;
    }
    student.save();
    res.sendStatus(200);
  });
};

module.exports.studentReset = studentReset;
module.exports.completedItem = completedItem;
module.exports.registerStudent = registerStudent;
module.exports.studentLogin = studentLogin;
module.exports.studentProfile = studentProfile;
