const Quiz = require("../models/Quiz");

const getQuizByID = (req, res) => {
  Quiz.findById(req.params.id, (err, Quiz) => {
    if (!err) {
      res.json(Quiz);
    }
  });
};

module.exports.getQuizByID = getQuizByID;
