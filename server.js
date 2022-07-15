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
    require("./getData")(req,res,collection)
    // console.log("im in get");

    // collection.find({ hall: req.query.hall }).toArray((err, res) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(`fetched data for ${req.query.hall} of length ${res.length}`);
    //     return res;
    //   }
    // });
  });
  app.post("/hallbooking", async (req, res) => {
    await collection.insertOne(req.body);
    res.status(200).send("real data inserted");
  });

  app.listen(PORT, () => {
    console.log("Server is listening to port " + PORT);
  });
};
