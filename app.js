const app = require("express")();

require("./config").config(app);
require("./db").connectDb();

const indexRoutes = require("./routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

module.exports = app;
