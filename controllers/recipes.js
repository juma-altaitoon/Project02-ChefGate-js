const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");

exports.recipe_create_post = (req, res) => {
    console.log(req.body);
    let recipe = new recipe(req.body);
}
exports.recipe_get = (req, res) => {
    res.send("working on chefs file")
}
exports.recipes_get = (req, res) => {
    res.render("home/recipe");
}