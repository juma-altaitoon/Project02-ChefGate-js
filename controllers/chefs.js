const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");

exports.chef_create_post = (req, res) => {
    console.log(req.body);
    let chef = new chef(req.body);
}
exports.chefs_get = (req, res) => {
    res.render("home/chef");
}

exports.chefs_create_get = (req, res) => {
    res.render('chef/add')
}

exports.chefs_details_get = (req, res) => {
    res.render('chef/details')
}

exports.chefs_edit_get = (req, res) => {
    res.render('chef/edit')
}

exports.chefs_index_get = (req, res) => {
    res.render('chef/index')
}