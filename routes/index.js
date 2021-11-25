const router = require("express").Router();
const { getHome, getPrivate } = require("../controllers");

router.get("/", getHome).get("/private", getPrivate);

module.exports = router;
