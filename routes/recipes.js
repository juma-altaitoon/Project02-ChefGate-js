const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
// router.use(urlencoded({extended: true}));

const recipeCtrl = require("../controllers/recipes");
router.get("/recipe", recipeCtrl.recipes_get);

//GET
router.get("/recipe/add", recipeCtrl.recipes_create_get);
router.get("/recipe/details", recipeCtrl.recipes_details_get);
router.get("recipe/edit", recipeCtrl.recipes_edit_get);
router.get("/recipe/index", recipeCtrl.recipes_index_get);

//POST
router.post("/recipe/add", recipeCtrl.recipes_create_post);
router.post("/recipe/details", recipeCtrl.recipes_details_post);
router.post("recipe/edit", recipeCtrl.recipes_edit_post);
router.post("/recipe/index", recipeCtrl.recipes_index_post);

module.exports = router;