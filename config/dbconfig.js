const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CRUDApp",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Connection error");
  } else {
    console.log("Connected!");
  }
});

mysqlConnection.query("CREATE DATABASE IF NOT EXISTS CRUDApp", (error) => {
  if (error) {
    console.log("Error creating DB");
  } else {
    console.log("Create DB!");
  }
});

module.exports = mysqlConnection;
