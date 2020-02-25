"use strict";

const router = require("express").Router();
const controller = require("../controllers/homeController");

router.get("/", controller.get);

module.exports = router;