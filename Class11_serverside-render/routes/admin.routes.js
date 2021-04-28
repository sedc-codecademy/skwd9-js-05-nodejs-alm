const router = require("express").Router();
const ts = require("../textService");
const path = require("path");
const root = require('../util/path.util');

router.get("/add-user", (req, res) => {
  res.sendFile(path.join(root ,"views", "add-user.html"));
});

router.post("/add-user", (req, res) => {
  const user = req.body;
  const text = ts.readDataFromDb("db.json");
  const dbData = JSON.parse(text);

  const newDbData = [...dbData, user];

  const stringified = JSON.stringify(newDbData);
  ts.writeDataToDb("db.json", stringified);

  res.redirect("/api/users");
});

module.exports = router;
