const express = require('express');
const router = express.Router();
const recipeCtrl = require("../controllers/recipes");
router.get("/recipes", recipeCtrl.recipes_get);

module.exports = router;