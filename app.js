// step 1
const express = require("express");

// step 2
const app = express();

//step 4

app.get("/name", (req, res) => {
  res.send("Welcome Yasser To JS Bootcamp ");
});

// step 3

app.listen(8000, () => {
  console.log(" iam listining ");
});
