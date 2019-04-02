const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();
const db = require("./config/keys").mongoURI;

// If deployed, use assigned port or default to 3000
const PORT = process.env.port || 3000;
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
