// For dicumentation visit: https://github.com/themikenicholson/passport-jwt
// import passport
const passport = require("passport");
// initializing the strategy
const JwtStrategy = require("passport-jwt").Strategy;
// return a new extractor configured with the given parameters
const ExtractJwt = require("passport-jwt").ExtractJwt;
// bring in mongoose
const mongoose = require("mongoose");
//bring in User model
const User = require("../models/User");
// bring in connection keys
const keys = require("keys");

// initializing opts an empty object
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrkey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch(error => {
          console.log(error);
        });
    })
  );
};
