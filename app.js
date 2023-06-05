const express = require("express");
const books = require("./data/books");
const app = express();
const fs = require("fs/promises");
const path = require("path");
const moment = require("moment");
const cors = require("cors");
const booksRouter = require("./routes/api/books.js");

const logPath = path.join(__dirname, "public", "server.log");
const booksPath = path.join(__dirname, "data", "books.js");

app.use(cors());

app.use("/api/books", booksRouter);

app.listen(3000, () => {
  console.log("Server is started");
});

// app.get("/api/books", (req, res) => {
//   res.json(books);
// });

// app.get("/api/books/:id", (req, res) => {
//   const { id } = req.params;
//   //   const response = await fs.readFile(booksPath);
//   //   const books = JSON.parse(response);
//   const book = books.filter((book) => book.id === id);

//   res.json(book);
// });

// app.post("/api/books", (req, res) => {});

// app.put("/api/books/:id", (req, res) => {});

// app.delete("/api/book/;id", (req, res) => {});

// app.get("/", (request, response) => {
//   response.send("<h2>Home page</h2>");
// });

// app.get("/contacts", (request, response) => {
//   console.log(request.url);
//   console.log(request.method);
//   response.send("<h2>Contacts page</h2>");
// });

// app.get("/books", (request, response) => {
//   response.json(books);
//   //   response.send(books);
// });

// app.use((req, res, next) => {
//   console.log("1 middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("2 middleware");
//   next();
// });

// app.use("/products", (req, res, next) => {
//   console.log(req.url);
//   next();
// });

// app.get("/products", (req, res) => {
//   res.json([]);
// });

// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   console.log(date);
//   await fs.appendFile(logPath, `\n${method}, ${url}, ${date}`);

//   next();
// });

// app.get("/books", (request, response) => {
//   response.json(books);
// });

// app.use((req, res) => {
//   res.status(404).json({ message: "Nothing found!" });
// });
