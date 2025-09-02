const express = require("express");
const app = express();
const data = require("./data");

app.get("/", (req, res) => {
  res.send(data.user);
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/student", (req, res) => {
  res.send(data.student );
});

app.listen(3000, () => {
  console.log("server started");
});
