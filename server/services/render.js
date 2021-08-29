exports.homeRoute = (req, res) => {
  res.render("index");
};

exports.loginRoute = (req, res) => {
  res.render("login");
};

exports.dashboardRoute = (req, res) => {
  res.render("dashboard");
};

exports.gameRoute = (req, res) => {
  res.render("game");
};

exports.add_user = (req, res) => {
  res.render("add-user");
};

exports.update_user = (req, res) => {
  res.render("update-user");
};
