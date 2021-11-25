function getHome(req, res) {
  res.render("index");
}

function getPrivate(req, res) {
  console.log("req", req.session);
  res.render("private");
}

module.exports = { getHome, getPrivate };
