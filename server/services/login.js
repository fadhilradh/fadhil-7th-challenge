const users = require("../database/staticUsers");

const { password, ...safeData } = users.userData;

exports.authenticate = (req, res) => {
  const loginReq = req.body;
  if (loginReq.username !== users.userData.username) {
    if (
      loginReq.username === users.admin.username &&
      loginReq.password === users.admin.password
    ) {
      res.status(200).send({
        message: "Super Admin Login Successful",
      });
    }
    res.status(400).send({
      message: "Username is not registered",
    });
  } else if (loginReq.password !== users.userData.password) {
    res.status(400).send({ message: "Password is incorrect" });
  }
  res.status(200).send({
    message: "Login Successful",
    data: safeData,
  });
};