const express = require("express");

const books = require("../../data/books.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  //   const response = await fs.readFile(booksPath);
  //   const books = JSON.parse(response);
  const book = books.filter((book) => book.id === id);

  res.json(book);
});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/;id", (req, res) => {});

module.exports = router;
