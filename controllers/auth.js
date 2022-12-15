// Require User
const User = require("../models/User")
// Require Passport
const passport = require('../helper/config');
//  Require bcrypt
const bcrypt = require("bcrypt");
const salt = 10;

exports.auth_get = (req, res) => {
    res.send("working on auth file")
}
// SignUp - GET
exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}
// SignUp - POST 
exports.auth_signup_post = (req,res) => {
    let user = new User(req,res);

    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash)// To Check Hash password in database matches
    user.password = hash;

    // Save user to database
    user.save()
    .then (() => {
        res.redirect('auth/login');
    })
    .catch(err => {
        console.log(err);
        res.send("Error...Try again later");
    })
}
//  LogIn - GET
exports.auth_login_get = (req,res) => {
    res.render("auth/login");
}

//  LogIn - POST
exports.auth_login_post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
})

// Logout - GET
// exports.auth_logout_get = (req, res) => {
//     req.logout(function(err){
//         if(err){
//              return next(err);
//             }
//         res.redirect('/auth/login');
//     })
// }