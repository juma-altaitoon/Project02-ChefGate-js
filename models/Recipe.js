const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    mealName: String,
    mealType: String,
    prepareTime: Number,
    mealIngrediants: String,
    category: {
        type: Array,
        String: ['Bahraini', 'American', 'Italian','Chinese', 'Greek'], 
    },
    // enum under category was not working chaned to string
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