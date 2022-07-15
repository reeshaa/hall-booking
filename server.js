const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: "false" }));

module.exports = function (collection) {
  app.get("/", (req, res) => {
    console.log("hello /link");
  });
  app.get("/hallbooking", (req, res) => {
    console.log("im in get");

    collection.find({ hall: req.query.hall }).toArray((err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        return res;
      }
    });
  });
  app.post("/hallbooking", (req, res) => {
    collection.insert(req.body);
    console.log("real data inserted");
  });

  app.listen(PORT, () => {
    console.log("Server is listening to port " + PORT);
  });
};
