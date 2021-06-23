const express = require("express");

const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res, next) => {
    db.query("SELECT * FROM customer;", (err, result) => {
      if (err) {
        console.log("Error selecting customer " + err);
      } else {
        return res.render("index", { result });
      }
      return next(err);
    });
  });

  router.get("/update/:id", (req, res, next) => {
    // const { id } = req.body;
    // console.log("In update");
    console.log(req.params.id);
    const id = req.params.id;
    //console.log(req.params.id);

    //return next();

    db.query("SELECT * FROM customer WHERE id=?", [id], (err, result) => {
      if (err) {
        console.log("Error selecting roq");
      } else {
        console.log(result);
        return res.render("date", { result });
      }
      //return next();
    });
  });

  router.post("/update/:id", (req, res, next) => {
    console.log(req.body);
    const { id, lastName, firstName, age, job, email } = req.body;
    const sql =
      "UPDATE customer SET lastName=?, firstName=?, age=?, job=?, email=? WHERE id =?";
    db.query(sql, [lastName, firstName, age, job, email, id], (err, result) => {
      if (err) {
        console.log("Error updating ");
      } else {
        console.log(result);
        res.send({ message: "sucess" });
      }
    });
  });

  router.get("/add", (req, res) => {
    console.log("in add page");
    res.render("add");
  });

  router.post("/add", (req, res, next) => {
    console.log(req.body.lastName);
    const { lastName, firstName, age, job, email } = req.body;
    const sql =
      "INSERT INTO customer (lastName,firstName,age,job,email) VALUES(?,?,?,?,?);";

    db.query(sql, [lastName, firstName, age, job, email], (err, result) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      return res.redirect("/");
    });
  });

  return router;
};
