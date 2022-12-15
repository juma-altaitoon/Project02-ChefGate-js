const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");

exports.chef_create_post = (req, res) => {
    console.log(req.body);
    let chef = new chef(req.body);
}
exports.chefs_get = (req, res) => {
    res.send("working on chefs file")

    res.render("home/chef");
    // res.send("Blog working on auth file")
}








