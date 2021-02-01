var express = require("express");
var router = express.Router();
var usersController = require("../controller/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", usersController.register);
router.post("/login", usersController.login);

module.exports = router;
