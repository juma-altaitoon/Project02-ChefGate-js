const mongoose = require('mongoose');
const chefSchem = mongoose.Schema({
    firstName: String,
    LastName: String,
    emailAddress: String,

},
{
    timestamps: true
})

