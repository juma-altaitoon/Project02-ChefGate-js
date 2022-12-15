// Require User
const User = require("../models/User")
// Require Passport
const passport = require('../helper/config');
//  Require bcrypt
const bcrypt = require("bcrypt");
const salt = 10;

<<<<<<< HEAD
exports.recipe_create_post = (req, res) => {
    console.log(req.body);
    let recipe = new Recipe(req.body);
}
=======
>>>>>>> 948b6921d3f2fe87739e21a4ec3a5f83b4d4ae8a
exports.auth_get = (req, res) => {
    res.send("working on auth file")
}

exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}
exports.auth_login_get = (req,res) => {
    res.render("auth/login");
}
