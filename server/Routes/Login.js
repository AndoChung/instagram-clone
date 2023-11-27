const express = require("express");
const router = express.Router();


const loginController = require("../Controller/LoginController");

router.get("/", loginController.get);

module.exports = router;