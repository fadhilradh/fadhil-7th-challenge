const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(port, () => {
   console.log("listening");
});

const Routes = require("./routes/Routes");
app.use(Routes);

// const con = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "",
// });

// con.connect(function (err) {
//    if (err) throw err;
//    console.log("Connected!");
// });
