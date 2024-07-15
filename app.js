const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");

const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(cors());
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

module.exports = app;
