const express = require("express");
const app = express();
var cors = require("cors");
// var bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
var json = require("json");

module.exports = function (db) {
  //   app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.post("/sendNewBooking", (req, res) => {
    console.log(req.body);
  });

  app.listen(PORT, () => {
    console.log("Server is listening to port " + PORT);
  });
};
