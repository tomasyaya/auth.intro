const router = require("express").Router();
const { getHome, getPrivate, getPrivateUser } = require("../controllers");

const isLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }
  next();
};
router
  .get("/", getHome)
  .get("/private", getPrivate)
  .get("/private/user", getPrivateUser);

module.exports = router;
