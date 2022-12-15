const express = require("express");
const router = express.Router();
const chefsCtrl = require('../controllers/chefs');
router.get("/chefs", chefsCtrl.chefs_get);

module.exports = router;