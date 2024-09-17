import express from "express";
//const { title } = require("process");
const router = express.Router();

let titles = [
  { id: 1, title: "Title One " },
  { id: 2, title: "Title Two " },
  { id: 3, title: "Title Third " },
];

// JSON response in Routes
router.get("/", (req, res) => {
  // console.log(req.query);
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(titles.slice(0, limit));
  } else {
    res.status(200).json(titles);
  }
});

// get a single Post through ID in Routes
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const title = titles.find((titles) => titles.id === id);

  if (!title) {
    return res.status(404).json({ message: "Title not found" });
  }
  res.status(200).json(title);
});

export default router;
