require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("codewithrishii");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login in with Chai Aur Code</h1>");
});

app.listen(process.env, () => {
  console.log(`Example app listening on port ${port}`);
});
