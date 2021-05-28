const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const path = require("path");

const routes = require("./routes/index");
//const mysqlConnection = require("./config/dbconfig");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./static")));

app.use("/", routes);

app.listen(process.env.PORT, () => {
  //console.log(process.env);
  console.log(`listening on port ${process.env.PORT}`);
});
