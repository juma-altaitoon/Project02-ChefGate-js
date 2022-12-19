const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { fileLoader } = require('ejs');

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

    userName: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, "Please enter your User Name min 4 Characters"],
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

    },
    
    userRole: {
        type: String,
        required: false,
        enum: ["Admin", "Chef", "User"]
    },

    profilePicture: {
        type: String,
        required: false
    }

},
{
    timestamps: true
})
userSchema.methods.verifyPassword = function(password){
    console.log(password)
    console.log(this.password);
    return bcrypt.compareSync(password, this.password);
}


const User = mongoose.model("User", userSchema);
module.exports = User;