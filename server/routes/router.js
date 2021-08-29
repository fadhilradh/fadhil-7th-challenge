const express = require("express");
const route = express.Router();
const render = require("../services/render");
const login = require("../services/login");
const controllers = require("../controllers/userController");

route.get("/", render.homeRoute);
route.get("/login", render.loginRoute);
route.get("/dashboard", render.dashboardRoute);
route.get("/add-user", render.add_user);
route.get("/update-user", render.update_user);

route.post("/login", login.authenticate);

// API

route.post("/api/users", controllers.create);
route.get("/api/users", controllers.find);
route.put("/api/users/:id", controllers.update);
route.delete("/api/users/:id", controllers.delete);

module.exports = route;
