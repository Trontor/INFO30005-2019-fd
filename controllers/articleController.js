const mongoose = require("mongoose");
const Article = require("../models/Article");

// const findArticleByTitle = (req, res) => {
//   const articleTitle = req.params.title;
//   Article.find({ title: articleTitle }, (err, article) => {
//     if (!err) {
//       res.json({ title: articleTitle, stars: article.starAward });
//     } else {
//       res.sendStatus(404).json({ title: "Cannot find article." });
//     }
//   });
// };

const getArticleByID = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (!err) {
      res.json({
        title: article.title,
        author: article.description,
        image: article.featuredImage,
        content: article.content,
        starAward: article.starAward
      });
    }
  });
};

module.exports.getArticleByID = getArticleByID;
