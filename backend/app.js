var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const chaf = require("connect-history-api-fallback");

var indexRouter = require("./routes/index");
const apiMemoRouter = require("./routes/apimemo");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(chaf());

app.use("/", indexRouter);
app.use("/api/memo/", apiMemoRouter);

module.exports = app;
