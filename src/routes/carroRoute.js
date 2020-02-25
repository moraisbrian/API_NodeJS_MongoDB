"use strict";

const router = require("express").Router();
const controller = require("../controllers/carroController");

router.get("/", controller.get);
router.get("/:id", controller.getOne);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;