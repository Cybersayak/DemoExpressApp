import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Sayak as I am Learning Express Js!");
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
