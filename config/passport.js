const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Student = mongoose.model("students");
const Teacher = mongoose.model("teachers");
const keys = require("./keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      const student = await Student.findById(jwt_payload.id);
      if (student) {
        // We found the student!
        return done(null, student);
      } else {
        const teacher = await Teacher.findById(jwt_payload.id);
        if (teacher) {
          // We found the student!
          return done(null, teacher);
        }
      }
      return done(null, false);
    })
  );
};
