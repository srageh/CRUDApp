const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const path = require("path");

const routes = require("./routes");
//c
const db = require("./config/dbconfig");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/static")));

app.use("/", routes(db));

app.listen(process.env.PORT, () => {
  //console.log(process.env);
  console.log(`listening on port ${process.env.PORT}`);
});
