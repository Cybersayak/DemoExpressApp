import express from "express";
import path from "path";
import titles from './routes/titles.js';
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Route is /render.html
app.use(express.static(path.join(__dirname, "public")));
// Express Static Middleware

let posts = [
  { id: 1, name: "Sayak Ghosh" },
  { id: 2, name: "Sagar Gaya" },
  { id: 3, name: "Prince Kumar" },
];

// JSON response in Routes
app.get("/api/posts", (req, res) => {
  // console.log(req.query);
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// get a single Post through ID in Routes
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((posts) => posts.id === id));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "about.html"));
});


// Routes of titles
app.use("/api/titles", titles);


app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});


