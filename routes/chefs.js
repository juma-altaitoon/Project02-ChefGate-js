const express = require("express");
const router = express.Router();
const chefsCtrl = require('../controllers/chefs');

router.get("/chef", chefsCtrl.chefs_get);
router.get("/chef/index", chefsCtrl.chefs_index_get);

module.exports = router;