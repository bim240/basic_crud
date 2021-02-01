var express = require("express");
var router = express.Router();
var auth = require("../modules/auth");
var userController = require("../controller/user");

router.get("/", auth.userAuth, userController.getUserInfo);
router.put("/", auth.userAuth, userController.updateUserInfo);
router.delete("/", auth.userAuth, userController.deleteUser);

module.exports = router;
