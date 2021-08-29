const express = require("express");
const Routes = express.Router();

const UsersControllers = require("../controllers/User");
const SequelizeControllers = require("../controllers/Sequelize.js");

Routes.get("/", (req, res) => {
  res.render("index");
});

Routes.get("/login", UsersControllers.Login);

Routes.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

Routes.get("/add-user", (req, res) => {
  res.render("add-user");
});

Routes.get("/update-user", (req, res) => {
  res.render("update-user");
});

Routes.get("/sequelize", SequelizeControllers.Tester);

const userData = {
  username: "fadhil",
  password: "12345",
  fullname: "Fadhil Radhian",
  age: "18",
  address: "Semarang",
};

const superAdmin = {
  username: "admin",
  password: "admin123",
};

const { password, ...safeData } = userData;

Routes.post("/register", UsersControllers.Register);

Routes.post("/login", (req, res) => {
  const loginReq = req.body;
  if (loginReq.username !== userData.username) {
    res.status(400).send({
      message: "Username is not registered",
    });
  } else if (loginReq.password !== userData.password) {
    res.status(400).send({ message: "Password is incorrect" });
  } else if (
    loginReq.username === superAdmin.username &&
    loginReq.password === superAdmin.password
  ) {
    res.status(200).send({
      message: "Super Admin Login Successful",
    });
  }
  res.status(200).send({
    message: "Login Successful",
    data: safeData,
  });
});

module.exports = Routes;
