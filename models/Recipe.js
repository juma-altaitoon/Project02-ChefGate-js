const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    mealName: String,
    mealType: String,
    prepareTime: Number,
    mealDescription: String,
    chef : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chef'
    }]
},
{
    timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;