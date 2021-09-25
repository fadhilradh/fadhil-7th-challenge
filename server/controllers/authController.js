const UserDB = require("../models/MongoDB/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
   const { username, fullname, password, email, bio } = req.body;

   try {
      if (!(email && password && username)) {
         res.status(400).send({
            message: "Please fill in username, email, and password",
         });
      }

      const isUserExist = await UserDB.findOne({ email });

      if (isUserExist) {
         return res
            .status(409)
            .send({ message: "User Already Exist. Please Login" });
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      let user = await UserDB.create({
         username,
         email: email.toLowerCase(), // sanitize: convert email to lowercase
         password: encryptedPassword,
         token: "",
         role: "user",
      });

      const token = jwt.sign({ email }, "fadhil", {
         expiresIn: "2h",
      });

      console.log("token", token);

      user.token = token;

      res.status(201).send({
         message: "Successfully registered",
         data: user,
         token,
      });
   } catch (err) {
      console.error(err);
   }
};

exports.login = async (req, res) => {
   const { username, password } = req.body;

   try {
      if (!(username && password)) {
         res.status(400).send({ message: "All input is required" });
      }
      const userFound = await UserDB.findOne({ username: username });

      if (!userFound) {
         res.status(404).send({ message: "User not found" });
         return;
      }

      const passwordMatch = await bcrypt.compare(password, userFound.password);

      if (userFound && passwordMatch) {
         // Create token
         const token = jwt.sign({ username }, "fadhil", {
            expiresIn: "2h",
         });
         res.status(200).send({
            message: "Login Successful",
            data: userFound,
            token,
         });
         return;
      }

      res.status(404).send({ message: "Username or password is incorrect" });
   } catch (error) {
      console.error(error);
   }
};
