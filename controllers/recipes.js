const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");
const moment = require('moment');

exports.recipes_get = (req, res) => {
    res.render("home/recipe");
}

exports.recipes_create_get = (req, res) =>{
    res.render("recipe/add")
}
exports.recipes_create_post = (req, res) => {
    
}

exports.recipes_details_get = (req, res) => {
    res.render('recipe/details')
}

exports.recipes_edit_get = (req, res) => {
    res.render("recipe/edit")   
}

exports.recipes_index_get = (req, res) => {
    res.render('recipe/index')
}

exports.recipe_create_post = (req, res) => {
    console.log(req.body);
    let recipe = new recipe(req.body);
}