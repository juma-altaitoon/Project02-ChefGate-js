const express = require('express');
const router = express.Router();

// router.use(express.urlencoded({extended: true}));

const authCtrl = require("../controllers/auth");

router.get("/auth", authCtrl.auth_get);

router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", authCtrl.auth_signup_post);

router.get("/auth/login", authCtrl.auth_login_get);
router.post("/auth/login", authCtrl.auth_login_post);

router.get("/auth/dashboard", authCtrl.auth_dashboard_get);
router.get("/auth/logout", authCtrl.auth_logout_get);
router.get("/chef/details", authCtrl.user_details_get);
router.get("/chef/edit", authCtrl.auth_edit_get);
router.put("/chef/edit", authCtrl.auth_update_put);


module.exports = router;