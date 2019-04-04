const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

// MongoDB config
const db = require("./config/keys").mongoURI;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Config
require("./config/passport.js")(passport);

// If deployed, use assigned port or default to 5000
const PORT = process.env.port || 5000;
// Connect to mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => res.send("Hello"));

// Link routes
app.use("/api/users", users);
app.use("/api/profile", profile);

app.listen(PORT, () =>
  console.log(`Freedom Dive Hello Food API is listening on port ${PORT}!`)
);
