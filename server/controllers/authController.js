const UserDB = require("../models/MongoDB/model");

exports.login = (req, res) => {
  
    const { username } = req.body
    const { password } = req.body

    UserDB.findOne({username: username})
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "User not found" });
          return;
        }

        if(password === data.password) {
          res.status(200).send({ message: "Login Successful", data: data });
          return
        }
        
        res.status(404).send({ message: "Username or password is incorrect" });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error while getting user by id" });
      });
    }
