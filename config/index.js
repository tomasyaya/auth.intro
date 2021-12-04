const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");

const { NODE_ENV, SESS_SECRET, MONGODB_URL } = process.env;
const isProduction = NODE_ENV === "production";

function config(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(cookieParser());
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "..", "views"));
  app.set("trust proxy", 1);

  app.use(
    session({
      secret: SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: isProduction ? "none" : "lax",
        secure: isProduction,
        httpOnly: true,
        maxAge: 60000,
      }, // ADDED code below !!!
      store: MongoStore.create({
        mongoUrl: MONGODB_URL,

        // ttl => time to live
        // ttl: 60 * 60 * 24 // 60sec * 60min * 24h => 1 day
      }),
    })
  );
}

module.exports = { config };
