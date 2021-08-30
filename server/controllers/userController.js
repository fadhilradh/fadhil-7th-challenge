const UserDB = require("../models/MongoDB/model");

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  const newUser = new UserDB({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    bio: req.body.bio,
    role: req.body.role,
  });

  newUser
    .save(newUser)
    .then((data) => {
      res.redirect("/dashboard");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while creating user",
      });
    });
};

// retrieve all users / single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    UserDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "User not found" });
          return;
        }
        res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error while getting user by id" });
      });
  } else {
    UserDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occured while finding user",
        });
      });
  }
};

// update an existing user

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  //get id from URL parameters
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id: ${id}. Probably user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured whule updating user details",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id: ${id}. Probably user not found`,
        });
      } else {
        res.send({
          message: "User was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured whule deleting user",
      });
    });
};
