const Express = require("express");

const Login = (req, res) => {
   res.render("login");
};

const Register = (req, res) => {
   res.send("success");
};

exports.Login = Login;
exports.Register = Register;
