const express = require("express");
const route = express.Router();
const render = require("../services/render");
// const login = require("../services/login");
const userCRUDController = require("../controllers/userController");
const authController = require("../controllers/authController");

route.get("/", render.homeRoute);
route.get("/login", render.loginRoute);
route.get("/dashboard", render.dashboardRoute);
route.get("/add-user", render.add_user);
route.get("/update-user", render.update_user);
route.get("/game", render.gameRoute)

route.post("/login", authController.login);

// API

route.post("/api/users", userCRUDController.create);
route.get("/api/users", userCRUDController.find);
route.put("/api/users/:id", userCRUDController.update);
route.delete("/api/users/:id", userCRUDController.delete);

module.exports = route;
