const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
router.use(urlencoded({extended: true}));

const recipeCtrl = require("../controllers/recipes");
router.get("/recipe", recipeCtrl.recipes_get);

//GET
router.get("/recipe/add", recipeCtrl.recipe_add_get);
router.get("/recipe/details", recipeCtrl.recipe_details_get);
router.get("recipe/edit", recipeCtrl.recipe_edit_get);
router.get("/recipe/index", recipeCtrl.recipes_index_get);
router.get("/recipe/myrecipes", recipeCtrl.myrecipes_index_get);
router.get("/recipe/delete", recipeCtrl.recipe_delete_get)
//POST
router.post("/recipe/add", recipeCtrl.recipe_add_post);
router.post("recipe/edit", recipeCtrl.recipe_update_put);
// router.post("/recipe/details", recipeCtrl.recipes_details_post);
// router.post("/recipe/index", recipeCtrl.recipes_index_post);

module.exports = router;