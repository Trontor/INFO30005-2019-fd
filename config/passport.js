const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Student = mongoose.model("students");
const keys = require("./keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      Student.findById(jwt_payload.id)
        .then(student => {
          if (student) {
            // We found the student!
            return done(null, student);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
