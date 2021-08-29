const express = require("express");
const route = express.Router();
const render = require("../services/render");
const login = require("../services/login");

// const UsersControllers = require("../controllers/User");
// const SequelizeControllers = require("../controllers/Sequelize.js");

route.get("/", render.homeRoute);
route.get("/login", render.loginRoute);
route.get("/dashboard", render.dashboardRoute);
route.get("/add-user", render.add_user);
route.get("/update-user", render.update_user);

route.post("/login", login.authenticate);

module.exports = route;

// route.get("/sequelize", SequelizeControllers.Tester);
// route.post("/register", UsersControllers.Register);
