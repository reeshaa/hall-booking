var mongo = require("mongodb").MongoClient;

mongo.connect(
  "mongodb+srv://reesha1234:reesha1234@cluster0.tcjqumw.mongodb.net/?retryWrites=true&w=majority",
  (err, db) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to DB");
    require("./server.js")(db);
  }
);
