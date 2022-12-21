const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");
const moment = require('moment');
const Author = require("../models/Recipe");
const User = require("../models/User");
// GET
exports.recipes_get = (req, res) => {
    res.render("home/recipe");
}

exports.recipes_create_get = (req, res) =>{
    User.find()
    .then(authors => {
        res.render("recipe/add", {authors})
    })
    .catch((err) => {
        console.log(err);
    })
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

exports.myrecipes_index_get = (req, res) => {
    Recipe.find()
    .then(recipes => {
        res.render("recipe/myrecipes", {recipes, moment})
    })
    .catch((err)=> {
        console.log(err);
    })
}


// POST
exports.recipes_post = (req, res) => {
    res.render("home/recipe");
}

exports.recipes_create_post = (req, res) =>{
    res.render("recipe/add")
}

exports.recipes_details_post = (req, res) => {
    res.render('recipe/details')
}

exports.recipes_edit_post = (req, res) => {
    res.render("recipe/edit")   
}

exports.recipes_index_post = (req, res) => {
    res.render('recipe/index')
}

exports.recipe_create_post = (req, res) => {
    console.log(req.body);
    let recipe = new recipe(req.body);
}

// exports.homepage = async(req, res) => {
//     try {
//       const limitNumber = 5;
//       const categories = await Category.find({}).limit(limitNumber);
//       const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
//       const thai = await Recipe.find({ 'category': 'Bahraini' }).limit(limitNumber);
//       const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
//       const chinese = await Recipe.find({ 'category': 'Italian' }).limit(limitNumber);
  
//       const food = { latest, Bahraini, american, Italian };
  
//       res.render('index', { title: 'Cooking Blog - Home', categories, food } );
//     } catch (error) {
//       res.satus(500).send({message: error.message || "Error Occured" });
//     }
//   }