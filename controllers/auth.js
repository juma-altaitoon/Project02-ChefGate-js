// Require User
const User = require("../models/User")
// Require Passport
const passport = require('../helper/config');
//  Require bcrypt
const bcrypt = require("bcrypt");
const salt = 10;

exports.recipe_create_post = (req, res) => {
    console.log(req.body);
    let recipe = new Recipe(req.body);
}


exports.auth_get = (req, res) => {
    res.send("working on auth file")
}

exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}
exports.auth_login_get = (req,res) => {
    res.render("auth/login");
}
