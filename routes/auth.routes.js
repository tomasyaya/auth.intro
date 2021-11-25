const router = require("express").Router();
const {
  getLogin,
  getSignup,
  login,
  signup,
} = require("../controllers/auth.controllers");

router
  .get("/login", getLogin)
  .get("/signup", getSignup)
  .post("/login", login)
  .post("/signup", signup);

module.exports = router;
