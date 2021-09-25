const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   fullname: {
      type: String,
      required: false,
   },
   email: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   bio: {
      type: String,
      required: false,
   },
   role: {
      type: String,
      required: false,
   },
});

const UserDB = mongoose.model("userdb", userSchema);

module.exports = UserDB;
