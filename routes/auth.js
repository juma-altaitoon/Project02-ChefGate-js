const express = require('express');
const router = express.Router();
const authCtrl = require("../controllers/auth")

router.get("/auth", authCtrl.auth_get);

router.get("/auth/signup", authCtrl.auth_signup_get);
router.get("/auth/signup", authCtrl.auth_signup_post);

router.get("/auth/login", authCtrl.auth_login_get);
router.get("/auth/login", authCtrl.auth_login_post);



module.exports = router;