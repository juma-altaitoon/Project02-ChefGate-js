const express = require('express');
const router = express.Router();
const authCtrl = require("../controllers/auth")

router.get("/auth", authCtrl.auth_get);

module.exports = router;