"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

const homeRoute = require("../src/routes/homeRoute");
const carroRoute = require("../src/routes/carroRoute");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", homeRoute);
app.use("/carro", carroRoute);

module.exports = app;