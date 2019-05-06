const Thread = require("../models/Thread");

const createThread = (req, res) => {
  const thread = new Thread({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });
  thread.save((err, newThread) => {
    if (!err) {
      res.send(newThread);
    } else {
      res.sendStatus(400).json(err);
    }
  });
};

const findThreadByTitle = (req, res) => {
  const threadTitle = req.params.title;
  Thread.find({ title: threadTitle }, (err, thread) => {
    if (!err) {
      res.send(thread);
    } else {
      res.sendStatus(404).json({ title: "Cannot find thread." });
    }
  });
};

// return the threads from this author
const findThreadsByAuthor = (req, res) => {
  const author = req.params.author;
  var threadList = [];
  Thread.find({ author: author }, (err, threads) => {
    if (!err) {
      res.send(threads);
    } else {
      res.status(400).send({
        success: "false",
        message: "Cannot fetch threads"
      });
    }
  });
};

// update thread with a new post
// input is threadId, reply author and content
const addReply = (req, res) => {
  const reply = {
    authorID: req.body.authorID,
    datePosted: new Date(),
    content: req.body.content
  };
  Thread.findById(req.params.id, (err, thread) => {
    if (!err) {
      thread.replies.push(reply);
      thread.save(err => {
        if (err) {
          res
            .status(400)
            .json({ status: "Fail to add reply.", errors: err.errors });
        } else {
          res.status(200).json({ status: "Succesfully added reply" });
        }
      });
    } else {
      res.status(400).send({
        success: "false",
        message: "Update thread failed"
      });
    }
  });
};

const deleteThread = (req, res) => {
  Thread.findByIdAndRemove(req.params.id, (err, thread) => {
    if (err) {
      return res
        .status(400)
        .send({ success: "false", message: "Error deleting thread" });
    }
    res.status(200).send({
      success: "true",
      message: "Thread deleted successfully."
    });
  });
};

module.exports.createThread = createThread;
module.exports.findThreadByTitle = findThreadByTitle;
module.exports.findThreadsByAuthor = findThreadsByAuthor;
module.exports.addReply = addReply;
module.exports.deleteThread = deleteThread;
