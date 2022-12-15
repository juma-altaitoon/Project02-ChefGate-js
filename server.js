const express = require('express');
const mongoose = require('mongoose');

const port = 4000;
const app = express();

// const bcrypt = require('bcrypt');

//To look for F.E files
app.use(express.static("public"));

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

// Require Passport
const passport = require('./helper/config')

// Require Express-Session
const session = require('express-session');

app.use(session( {
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge:36000000}
}
));

// Initialize passport & Session
app.use(passport.initialize());
app.use(passport.session());


//Import and mount routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);
const aboutUsRoute = require('./routes/aboutUs');
app.use('/', aboutUsRoute);
const contactUsRoute = require('./routes/contactUs');
app.use('/', contactUsRoute);
const recipeRoute = require("./routes/recipes")
app.use('/', recipeRoute);
const blogRoute = require('./routes/blog');
app.use('/', blogRoute);
const chefRoute = require('./routes/chefs');
app.use('/', chefRoute);
const authRoute = require('./routes/auth');
app.use('/', authRoute);

app.set("view engine", "ejs");


app.listen(port,() => {
    console.log("app is running");
})
