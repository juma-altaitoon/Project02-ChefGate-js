const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    mealName: String,
    mealType: String,
    prepareTime: Number,
    mealDescription: String
},
{
    timestamps: true
})