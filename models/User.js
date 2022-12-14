const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "Please enter your name"],
        maxlength: [20]
    },

    lastName: {
        type: String,
        required: true,
        minlength: [3, "Please enter your name"],
        maxlength: [20]
    },

    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: [4]

    }

},
{
    timestamps: true
})



const User = mongoose.model("User", userSchema);
module.exports = User;