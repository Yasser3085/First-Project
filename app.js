// step 1
const express = require("express");

// step 2
const app = express();

// telling node Js to use (ejs) as the view engine

app.set("view engine", "ejs");

//step 4

app.get("/name", (req, res) => {
  res.send(" Last Change ");
});

app.get("/testhtml", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

app.get("/testEjs", (req, res) => {
  const student = {
    grade: 100
  };
  res.render( "introToEjs.ejs",student);
});

// step 3

app.listen(3000, () => {
  console.log(" iam listining ");
});
