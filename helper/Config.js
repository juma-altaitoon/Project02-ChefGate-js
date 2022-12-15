// Require passport
const passport = require('passport');
// Require Model 
const User = require('../models/User');

const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        done(err, user);
    });
})

passport.use(new LocalStrategy({
    userNameField: "emailAddress",
    passwordField: "password"
},
    function(emailAddress, password, done) {
        User.findOne({ emailAddress: emailAddress }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
        });
    }
))

module.exports = passport;
