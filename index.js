import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "about.html"));
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
