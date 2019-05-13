const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// Routes
const studentRoute = require("./routes/api/student");
const teacherRoute = require("./routes/api/teacher");
const threadRoute = require("./routes/api/thread");
const videoRoute = require("./routes/api/videos");
const articleRoute = require("./routes/api/articles");
const quizRoute = require("./routes/api/quiz");

const app = express();

// MongoDB config
const db = require("./config/keys").mongoURI;

// Connect to mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Config
require("./config/passport.js")(passport);

// If deployed, use assigned port or default to 5000
const PORT = process.env.PORT || 5000;

// Link routes
app.use("/api/student", studentRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/videos", videoRoute);
app.use("/api/thread", threadRoute);
app.use("/api/article", articleRoute);
app.use("/api/quiz", quizRoute);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  console.log("Setting default route to client/build.");
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () =>
  console.log(`Freedom Dive Hello Food API is listening on port ${PORT}!`)
);
