const { Sequelize } = require("sequelize");
const express = require("express");

const Connection = async (req, res) => {
   const sequelize = new Sequelize("test", "root", "", {
      host: "localhost",
      dialect: "mysql",
   });
   try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
};

exports.Connection = Connection;
