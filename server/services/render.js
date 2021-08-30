const axios = require("../services/__http");

exports.homeRoute = (req, res) => {
  res.render("index");
};

exports.loginRoute = (req, res) => {
  res.render("login");
};

exports.dashboardRoute = (req, res) => {
  axios
    .http()
    .then((response) => {
      res.render("dashboard", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.gameRoute = (req, res) => {
  res.render("game");
};

exports.add_user = (req, res) => {
  res.render("add-user");
};

exports.update_user = (req, res) => {
  axios
    .http({ params: { id: req.query.id } })
    .then((response) => {
      res.render("update-user", { user: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
