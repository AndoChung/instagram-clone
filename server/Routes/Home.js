const express = require("express");
const router = express.Router();


const homeController = require("../Controller/HomeController");

router.get("/", homeController.get);

module.exports = router;