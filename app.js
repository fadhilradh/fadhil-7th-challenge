const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mysql = require("mysql");
const path = require("path");
const PORT = process.env.PORT || 1234;
const route = require("./server/routes/router");

dotenv.config({ path: "config.env" });

//log requests
const app = express();
app.use(morgan("tiny"));

//parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(route);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

// const con = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "",
// });

// con.connect(function (err) {
//    if (err) throw err;
//    console.log("Connected!");
// });
