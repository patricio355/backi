var express = require('express');
var router = express.Router();
const usersController = require ("../controllers/usersController")

router.get("/",usersController.allusers);
router.post("/create",usersController.createUser);

module.exports = router;

