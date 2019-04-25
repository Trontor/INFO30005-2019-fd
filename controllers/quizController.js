const mongoose = require('mongoose');
const Quiz = require("../models/Quiz");

const findQuizByTitle = (req, res) => {
    const quizTitle = req.params.title;
    Quiz.find({title:quizTitle}, (err, quiz) => {
        if (!err) {
            res.json({ title: quizTitle, stars: quiz.starAward });
        } else {
            res.sendStatus(404).json({title: "Cannot find quiz."});
        }
    });
};

module.exports.findQuizByTitle = findQuizByTitle;