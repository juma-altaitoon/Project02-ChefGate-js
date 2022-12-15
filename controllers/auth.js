const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");

exports.recipe_create_post = (req, res) => {
    console.log(req.body);
    let recipe = new Recipe(req.body);
}
exports.auth_get = (req, res) => {
    res.send("working on auth file")
}
