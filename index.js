var mongo = require("mongodb").MongoClient;

mongo.connect(
  "mongodb+srv://reesha1234:reesha1234@cluster0.tcjqumw.mongodb.net/?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to DB");
    let db = client.db("hall");
    let collection = db.collection("booking");

    require("./server.js")(collection);
  }
);
