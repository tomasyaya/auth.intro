function getHome(req, res) {
  console.log("inside home route");
  res.render("index");
}

function getPrivate(req, res) {
  console.log("req", req.session);
  res.render("private");
}

function getPrivateUser(req, res) {
  console.log("req", req.session.currentUser);
  res.render("user");
}

module.exports = { getHome, getPrivate, getPrivateUser };
