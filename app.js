const bodyParser = require("body-parser");
const connectDB = require("./server/database/connection");
const dotenv = require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const routes = require("./server/routes/router");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(morgan("tiny"));
app.use(routes);

app.set("view engine", "ejs");

connectDB();

module.exports = app;
