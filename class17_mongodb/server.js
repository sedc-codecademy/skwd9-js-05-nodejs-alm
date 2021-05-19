const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/mongo_keys");
const router = require('./const/router.const')

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, HOST, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  );

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://USERNAME:PASSWORD@cluster0.gt4c7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect(err => {
//   console.log("Error", err);
//   const collection = client.db("test").collection("devices");
//   console.log("Collection", collection);
//   // perform actions on the collection object
//   client.close();
// });
