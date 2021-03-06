var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
require("dotenv").config();

// connect to database
mongoose.connect(
  process.env.DATABASEURL || "mongodb://localhost/crud",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    console.log(err ? err : "connected to db");
  }
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  if (err.name == "ValidationError") {
    res.status(400).json({ err: { body: [err.message] } });
  }
  if (err.name == "JsonWebTokenError") {
    res.status(400).json({ err: { body: [err.message] } });
  }
  if (err.name == "MongoError") {
    res.status(400).json({ err: { body: [err.errmsg] } });
  }
  if (err.message == "Not Found") {
    res.status(404).json({ err: { body: [err.message] } });
  }
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // res.json(err);
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
