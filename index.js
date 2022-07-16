var mongo = require("mongodb").MongoClient;
require("dotenv").config();

mongo.connect(process.env.MONGO_URL, (err, client) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to DB");
  let db = client.db("hall");
  let collection = db.collection("booking");

  require("./server.js")(collection);
});
