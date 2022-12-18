const express = require("express");
const router = express.Router();
const chefsCtrl = require('../controllers/chefs');

router.get("/chefs", chefsCtrl.chefs_get);
router.get("/chef/add", chefsCtrl.chefs_create_get);
router.get("/chef/details", chefsCtrl.chefs_details_get);
router.get("/chef/edit", chefsCtrl.chefs_edit_get);
router.get("/chef/index", chefsCtrl.chefs_index_get);

module.exports = router;