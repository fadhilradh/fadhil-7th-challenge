const { Sequelize } = require("sequelize");
const express = require("express");

const connDB = require("../models/Sequelize/Connection");
const User = require("../models/Sequelize/Users");

const Tester = async (req, res) => {
   connDB.Connection();
   const a = await User.create({
      username: "superadmin",
      password: "admin123",
   });

   console.log(a.id);
   res.send("connected successfully");
};

Tester();
exports.Tester = Tester;
