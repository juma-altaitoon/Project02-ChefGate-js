const mongoose = require('mongoose');
const chefSchema = mongoose.Schema({
    firstName: String,
    LastName: String,
    emailAddress: String,
    
    recipe: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }]

},
{
    timestamps: true
})

const Chef = mongoose.model('Chef', chefSchema);
module.exports = Chef;
